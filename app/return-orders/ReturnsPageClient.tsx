'use client';

import { useMemo, useState } from 'react';
import { HydrationBoundary, DehydratedState } from '@tanstack/react-query';
import {
  Card,
  Button,
  LoadingSpinner,
  Typography,
  Tabs,
} from '@/shared/ui/components';
import { TReturnOrderStatus } from '@/shared/api/status-history/types';
import { useReturnOrdersHook } from '@/shared/api/return-orders/hook';
import { ReturnsTable } from '@/features/return-orders';

type TReturnsPageClientProps = {
  dehydratedState?: DehydratedState;
};

function ReturnsPageContent() {
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

  const statusOptions = [
    { value: 'all', label: 'Все' },
    { value: 'pending', label: 'Ожидает' },
    { value: 'in_review', label: 'На проверке' },
    { value: 'approved', label: 'Одобрено' },
    { value: 'rejected', label: 'Отклонено' },
  ];

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

        <Card>
          <Card.Header>
            <Typography variant="h5">
              Список возвратов
            </Typography>
          </Card.Header>
          <Card.Content>
            <div className="mb-6">
              <Tabs
                value={statusFilter}
                onChange={(value) => setStatusFilter(value as TReturnOrderStatus | 'all')}
                options={statusOptions}
              />
            </div>

            {isLoading && !data && (
              <div className="flex flex-col items-center justify-center py-12 gap-3">
                <LoadingSpinner size="lg" className="text-primary-600" />
                <Typography variant="caption" color="tertiary">
                  Загрузка данных...
                </Typography>
              </div>
            )}

            {error && (
              <div className="py-12 text-center">
                <Typography variant="body" color="danger" className="mb-4">
                  Ошибка загрузки данных
                </Typography>
                <Button onClick={() => refetch()}>Повторить</Button>
              </div>
            )}

            {filteredAndSortedReturns.length > 0 && (
              <ReturnsTable
                returns={filteredAndSortedReturns}
                sortOrder={sortOrder}
                onSortChange={setSortOrder}
              />
            )}

            {filteredAndSortedReturns.length === 0 && !isLoading && !error && (
              <div className="text-center py-12">
                <Typography variant="body" color="tertiary">
                  {statusFilter !== 'all'
                    ? 'Нет возвратов по выбранному фильтру'
                    : 'Нет возвратов'}
                </Typography>
              </div>
            )}
          </Card.Content>
        </Card>
      </div>
    </div>
  );
}

export default function ReturnsPageClient({
  dehydratedState,
}: TReturnsPageClientProps) {
  if (dehydratedState) {
    return (
      <HydrationBoundary state={dehydratedState}>
        <ReturnsPageContent />
      </HydrationBoundary>
    );
  }

  return <ReturnsPageContent />;
}

