import { QueryClient, focusManager, onlineManager } from '@tanstack/react-query';
import NetInfo from '@react-native-community/netinfo';
import { AppState, Platform } from 'react-native';
import axios from 'axios';

// Connecte React Query à l'état réseau réel de l'appareil
onlineManager.setEventListener((setOnline) =>
  NetInfo.addEventListener((state) => setOnline(!!state.isConnected)),
);

// Refetch quand l'app revient au premier plan (pas de "window focus" sur mobile)
export function setupFocusManager() {
  if (Platform.OS === 'web') return;
  const sub = AppState.addEventListener('change', (s) => focusManager.setFocused(s === 'active'));
  return () => sub.remove();
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60_000,          // données "fraîches" 1 min : moins de requêtes inutiles
      gcTime: 24 * 60 * 60_000,   // garde en cache 24 h (utile hors-ligne)
      networkMode: 'offlineFirst',// sert le cache d'abord, pas d'erreur immédiate sans réseau
      retry: (failureCount, error) => {
        // Ne jamais réessayer une erreur 4xx (erreur client, inutile de répéter)
        if (axios.isAxiosError(error) && error.response && error.response.status < 500) {
          return false;
        }
        return failureCount < 2;
      },
    },
    mutations: {
      networkMode: 'offlineFirst',
    },
  },
});