import { ReactNode, useEffect } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient, setupFocusManager } from '@/shared/lib/queryClient';

export function AppProviders({ children }: { children: ReactNode }) {
  useEffect(() => setupFocusManager(), []);
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}