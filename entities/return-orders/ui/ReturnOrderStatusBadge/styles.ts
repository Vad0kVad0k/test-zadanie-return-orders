import { TBadgeVariant } from '@/shared/ui/components';
import { TReturnOrderStatus } from '@/shared/api/status-history/types';

export const statusConfig: Record<
  TReturnOrderStatus,
  { label: string; variant: TBadgeVariant }
> = {
  pending: { label: 'Ожидает', variant: 'default' },
  approved: { label: 'Одобрено', variant: 'success' },
  rejected: { label: 'Отклонено', variant: 'danger' },
  in_review: { label: 'На проверке', variant: 'warning' },
};

