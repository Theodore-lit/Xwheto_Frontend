import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { secureStorage } from '@/shared/api/tokenStorage';

type SessionStatus = 'hydrating' | 'authenticated' | 'unauthenticated';

interface SessionState {
  accessToken: string | null;
  refreshToken: string | null;
  status: SessionStatus;
  setTokens: (access: string, refresh: string) => void;
  clearSession: () => void;
  _setHydrated: () => void;
}

export const useSessionStore = create<SessionState>()(
  persist(
    (set, get) => ({
      accessToken: null,
      refreshToken: null,
      status: 'hydrating',
      setTokens: (accessToken, refreshToken) =>
        set({ accessToken, refreshToken, status: 'authenticated' }),
      clearSession: () =>
        set({ accessToken: null, refreshToken: null, status: 'unauthenticated' }),
      _setHydrated: () =>
        set({ status: get().refreshToken ? 'authenticated' : 'unauthenticated' }),
    }),
    {
      name: 'xweto-session',
      storage: createJSONStorage(() => secureStorage),
      // On ne persiste QUE les tokens, pas le statut
      partialize: (s) => ({ accessToken: s.accessToken, refreshToken: s.refreshToken }),
      onRehydrateStorage: () => (state) => state?._setHydrated(),
    },
  ),
);