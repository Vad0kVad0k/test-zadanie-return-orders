'use client';

import { useQuery } from '@tanstack/react-query';
import { logError } from '@/shared/lib/error-handler';
import { getReturnOrderProductsApi, getProductsApi } from './api';
import { TProductsResponse } from './types';
import { TReturnOrderItem } from '../return-orders/types';

export function useReturnOrderProductsHook(returnOrderId: number) {
  return useQuery<TReturnOrderItem[], Error>({
    queryKey: ['return-order-products', returnOrderId],
    queryFn: async () => {
      try {
        return await getReturnOrderProductsApi(returnOrderId);
      } catch (error) {
        logError(error, {
          component: 'useReturnOrderProducts',
          action: 'fetchReturnOrderProducts',
          metadata: { returnOrderId },
        });
        throw error;
      }
    },
    enabled: !!returnOrderId,
  });
}

export function useProducts() {
  return useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      try {
        return await getProductsApi();
      } catch (error) {
        logError(error, {
          component: 'useProducts',
          action: 'fetchProducts',
        });
        throw error;
      }
    },
  });
}

