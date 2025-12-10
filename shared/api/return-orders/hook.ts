'use client';

import { logError } from '@/shared/lib/error-handler';
import { getReturnOrdersApi } from './api';
import { useQuery } from '@tanstack/react-query';

export function useReturnOrdersHook() {
  return useQuery({
    queryKey: ['return-orders'],
    queryFn: async () => {
      try {
        return await getReturnOrdersApi();
      } catch (error) {
        logError(error, {
          component: 'useReturnOrders',
          action: 'fetchReturnOrders',
        });
        throw error;
      }
    },
  });
}