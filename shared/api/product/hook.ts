'use client';

import { useQuery } from '@tanstack/react-query';
import { logError } from '@/shared/lib/error-handler';
import { getProductByIdApi } from './api';
import { TProductResponse } from './types';

export function useProductByIdHook(id: number) {
  return useQuery<TProductResponse, Error>({
    queryKey: ['product', id],
    queryFn: async () => {
      try {
        const product = await getProductByIdApi(id);
        if (!product) {
          throw new Error(`Товар с ID ${id} не найден`);
        }
        return product;
      } catch (error) {
        logError(error, {
          component: 'useProduct',
          action: 'fetchProduct',
          metadata: { productId: id },
        });
        throw error;
      }
    },
    enabled: !!id,
  });
}

