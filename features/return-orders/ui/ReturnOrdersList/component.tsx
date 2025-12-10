'use client';

import { Card, Typography, Tabs } from '@/shared/ui/components';
import { ReturnsTable, ReturnOrdersEmpty } from '@/features/return-orders';
import type { TReturnOrdersListProps } from './types';

export function ReturnOrdersList({
  returns,
  statusFilter,
  sortOrder,
  onStatusFilterChange,
  onSortChange,
}: TReturnOrdersListProps) {
  const statusOptions = [
    { value: 'all', label: 'Все' },
    { value: 'pending', label: 'Ожидает' },
    { value: 'in_review', label: 'На проверке' },
    { value: 'approved', label: 'Одобрено' },
    { value: 'rejected', label: 'Отклонено' },
  ];

  return (
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
            onChange={onStatusFilterChange}
            options={statusOptions}
          />
        </div>

        {returns.length > 0 ? (
          <ReturnsTable
            returns={returns}
            sortOrder={sortOrder}
            onSortChange={onSortChange}
          />
        ) : (
          <ReturnOrdersEmpty hasFilter={statusFilter !== 'all'} />
        )}
      </Card.Content>
    </Card>
  );
}

