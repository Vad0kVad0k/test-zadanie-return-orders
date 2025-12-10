'use client';

import { useQuery } from '@tanstack/react-query';
import { logError } from '@/shared/lib/error-handler';
import { getReturnOrderByIdApi } from './api';
import { TReturnOrderResponse } from './types';

export function useReturnOrderHook(id: number) {
  return useQuery<TReturnOrderResponse, Error>({
    queryKey: ['return-order', id],
    queryFn: async () => {
      try {
        const returnData = await getReturnOrderByIdApi(id);
        if (!returnData) {
          throw new Error(`Возврат с ID ${id} не найден`);
        }
        return returnData;
      } catch (error) {
        logError(error, {
          component: 'useReturnOrder',
          action: 'fetchReturnOrder',
          metadata: { returnId: id },
        });
        throw error;
      }
    },
    enabled: !!id,
  });
}
  