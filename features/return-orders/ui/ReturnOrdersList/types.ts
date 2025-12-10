import { TReturnOrderResponse } from '@/shared/api/return-order/types';

export interface TReturnOrdersListProps {
  returns: TReturnOrderResponse[];
  statusFilter: string;
  sortOrder: 'asc' | 'desc';
  onStatusFilterChange: (filter: string) => void;
  onSortChange: (order: 'asc' | 'desc') => void;
}

