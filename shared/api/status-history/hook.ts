'use client';

import { useQuery } from '@tanstack/react-query';
import { logError } from '@/shared/lib/error-handler';
import { TReturnOrderStatusHistoryResponse } from './types';
import { getReturnOrderStatusHistoryApi } from './api';

export function useReturnOrderStatusHistoryHook(returnOrderId: number) {
  return useQuery<TReturnOrderStatusHistoryResponse[], Error>({
    queryKey: ['return-order-status-history', returnOrderId],
    queryFn: async () => {
      try {
        return await getReturnOrderStatusHistoryApi(returnOrderId);
      } catch (error) {
        logError(error, {
          component: 'useReturnOrderStatusHistory',
          action: 'fetchReturnOrderStatusHistory',
          metadata: { returnOrderId },
        });
        throw error;
      }
    },
    enabled: !!returnOrderId,
  });
}

