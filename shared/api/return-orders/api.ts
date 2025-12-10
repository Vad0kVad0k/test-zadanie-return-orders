  import { TReturnOrdersResponse } from './types';

export async function getReturnOrdersApi(): Promise<TReturnOrdersResponse> {
    const { getReturns } = await import('@/shared/mock-server/data');
    return getReturns();
  }