import { api } from '@/shared/api/client';

export const authApi = {
  login: async (payload: { identifier: string; password: string }) => {
    const { data } = await api.post('/auth/login', payload);
    return data;
  },
};