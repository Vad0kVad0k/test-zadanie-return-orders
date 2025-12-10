import { TProductResponse } from './types';

export async function getProductByIdApi(id: number): Promise<TProductResponse | null> {
    const { getProductById } = await import(
      '@/shared/mock-server/data'
    );
    return getProductById(id);
  }