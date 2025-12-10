'use client';

import { Badge } from '@/shared/ui/components';
import { TReturnOrderStatusBadgeProps } from './types';
import { statusConfig } from './styles';

export function ReturnOrderStatusBadge({
  status,
}: TReturnOrderStatusBadgeProps) {
  const config = statusConfig[status];
  return <Badge variant={config.variant}>{config.label}</Badge>;
}

