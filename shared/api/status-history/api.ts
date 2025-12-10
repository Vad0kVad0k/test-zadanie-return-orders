import { TReturnOrderStatusHistoryResponse } from './types';

export async function getReturnOrderStatusHistoryApi(
  returnOrderId: number
): Promise<TReturnOrderStatusHistoryResponse[]> {
  const { getReturnOrderStatusHistory: getReturnOrderStatusHistoryImpl } = await import(
    '@/shared/mock-server/data'
  );
  return getReturnOrderStatusHistoryImpl(returnOrderId);
}

