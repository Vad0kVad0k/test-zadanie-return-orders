'use client';

import { use } from 'react';
import { useRouter } from 'next/navigation';
import { returnOrderHook } from '@/shared/api/return-order';
import { useReturnOrderProductsHook, useProducts } from '@/shared/api/products/hook';
import { useReturnOrderStatusHistoryHook } from '@/shared/api/status-history/hook';
import { routes } from '@/shared/lib';
import { ReturnOrderDetails } from '@/features/return-order';
import {
  ReturnOrderLoading,
  ReturnOrderError,
} from '@/entities/return-orders';

export default function ReturnDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();
  const { id } = use(params);
  const returnId = Number(id);

  const { data: returnData, isLoading: isLoadingReturn, error, refetch } =
    returnOrderHook.useReturnOrderHook(returnId);
  const { data: products } = useProducts();
  const { data: returnProducts, isLoading: isLoadingProducts } =
    useReturnOrderProductsHook(returnId);
  const { data: statusHistory, isLoading: isLoadingHistory } =
    useReturnOrderStatusHistoryHook(returnId);

  const isLoading = isLoadingReturn || isLoadingProducts || isLoadingHistory;

  if (isLoading) {
    return <ReturnOrderLoading fullScreen message="Загрузка данных о возврате..." />;
  }

  if (error || !returnData || !returnProducts || !statusHistory) {
    return (
      <ReturnOrderError
        error={error}
        message={error instanceof Error ? error.message : 'Не удалось загрузить данные о возврате'}
        onRetry={() => refetch()}
        onBack={() => router.push(routes.RETURN_ORDERS_LIST.getUrl())}
        fullScreen
      />
    );
  }

  return (
    <ReturnOrderDetails
      returnOrder={returnData}
      returnProducts={returnProducts}
      statusHistory={statusHistory}
      products={products}
      onBack={() => router.push(routes.RETURN_ORDERS_LIST.getUrl())}
    />
  );
}

