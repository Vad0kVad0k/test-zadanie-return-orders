import { TReturnOrderResponse } from './types';

export async function getReturnOrderByIdApi(id: number): Promise<TReturnOrderResponse | null> {
    const { getReturnById } = await import(
      '@/shared/mock-server/data'
    );
    return getReturnById(id);
  }