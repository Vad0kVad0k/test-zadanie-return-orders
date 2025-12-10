'use client';

import { useMemo, useState } from 'react';
import { Typography } from '@/shared/ui/components';
import { TReturnOrderStatus } from '@/shared/api/status-history/types';
import { useReturnOrdersHook } from '@/shared/api/return-orders/hook';
import { ReturnOrdersList } from '@/features/return-orders';
import {
  ReturnOrderLoading,
  ReturnOrderError,
} from '@/entities/return-orders';

export function ReturnOrdersPageContent() {
  const {
    data,
    isLoading,
    error,
    refetch,
  } = useReturnOrdersHook();

  const [statusFilter, setStatusFilter] = useState<TReturnOrderStatus | 'all'>('all');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  const allReturns = useMemo(() => {
    return data ?? [];
  }, [data]);

  const filteredAndSortedReturns = useMemo(() => {
    let filtered = allReturns;

    if (statusFilter !== 'all') {
      filtered = filtered.filter((item) => item.status === statusFilter);
    }

    const sorted = [...filtered].sort((a, b) => {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();
      return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    });

    return sorted;
  }, [allReturns, statusFilter, sortOrder]);

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Typography variant="h1" className="mb-2">
            Возвраты заказов
          </Typography>
          <Typography variant="body" color="secondary">
            Управление заявками на возврат товаров
          </Typography>
        </div>

        {isLoading && !data && <ReturnOrderLoading />}

        {error && <ReturnOrderError onRetry={() => refetch()} />}

        {!isLoading && !error && data && (
          <ReturnOrdersList
            returns={filteredAndSortedReturns}
            statusFilter={statusFilter}
            sortOrder={sortOrder}
            onStatusFilterChange={(value) => setStatusFilter(value as TReturnOrderStatus | 'all')}
            onSortChange={setSortOrder}
          />
        )}
      </div>
    </div>
  );
}

