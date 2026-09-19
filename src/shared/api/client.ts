import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';
import { useSessionStore } from '@/shared/store/sessionStore';

const BASE_URL = process.env.EXPO_PUBLIC_API_URL ?? 'http://localhost:8000/api/v1';

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 15_000,
  headers: { 'Content-Type': 'application/json' },
});

// Instance "nue" pour le refresh : sans intercepteurs, pour éviter une boucle infinie
const bareClient = axios.create({ baseURL: BASE_URL, timeout: 15_000 });

// Endpoints qui ne doivent JAMAIS déclencher de refresh
const NO_REFRESH_URLS = ['/auth/login', '/auth/register', '/auth/refresh', '/auth/verify-otp'];

type RetriableConfig = InternalAxiosRequestConfig & { _retry?: boolean };

// 1) Requête : injecter le token
api.interceptors.request.use((config) => {
  const token = useSessionStore.getState().accessToken;
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// 2) Refresh "single-flight"
let refreshPromise: Promise<string> | null = null;

async function refreshAccessToken(): Promise<string> {
  const { refreshToken, setTokens } = useSessionStore.getState();
  if (!refreshToken) throw new Error('NO_REFRESH_TOKEN');

  // Adapte le chemin et le body au contrat définitif du backend
  const { data } = await bareClient.post<{ access_token: string; refresh_token: string }>(
    '/auth/refresh',
    { refresh_token: refreshToken },
  );
  setTokens(data.access_token, data.refresh_token);
  return data.access_token;
}

// 3) Réponse : gérer les 401
api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const original = error.config as RetriableConfig | undefined;
    const status = error.response?.status;

    const shouldRefresh =
      original &&
      status === 401 &&
      !original._retry &&
      !NO_REFRESH_URLS.some((u) => original.url?.includes(u));

    if (!shouldRefresh) return Promise.reject(error);

    original._retry = true;

    try {
      refreshPromise ??= refreshAccessToken().finally(() => {
        refreshPromise = null;
      });
      const newToken = await refreshPromise;
      original.headers.Authorization = `Bearer ${newToken}`;
      return api(original); // on rejoue la requête d'origine
    } catch (refreshError) {
      // Déconnexion UNIQUEMENT si le serveur a rejeté le refresh token.
      // Une erreur réseau (pas de réponse) ne doit pas déconnecter : on est peut-être hors-ligne.
      if (axios.isAxiosError(refreshError) && refreshError.response) {
        useSessionStore.getState().clearSession();
      }
      return Promise.reject(refreshError);
    }
  },
);