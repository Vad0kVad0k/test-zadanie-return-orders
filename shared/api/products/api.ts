import { TProductsResponse } from './types';
import { TReturnOrderItem } from '../return-orders/types';

export async function getReturnOrderProductsApi(
  returnOrderId: number
): Promise<TReturnOrderItem[]> {
  const { getReturnOrderProducts } = await import(
    '@/shared/mock-server/data'
  );
  return getReturnOrderProducts(returnOrderId);
}

export async function getProductsApi(): Promise<TProductsResponse> {
  const { getProducts } = await import('@/shared/mock-server/data');
  return getProducts();
}

