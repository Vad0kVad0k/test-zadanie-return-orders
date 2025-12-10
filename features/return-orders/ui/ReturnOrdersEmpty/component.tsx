'use client';

import { Typography } from '@/shared/ui/components';
import type { TReturnOrdersEmptyProps } from './types';

export function ReturnOrdersEmpty({ hasFilter }: TReturnOrdersEmptyProps) {
  return (
    <div className="text-center py-12">
      <Typography variant="body" color="tertiary">
        {hasFilter
          ? 'Нет возвратов по выбранному фильтру'
          : 'Нет возвратов'}
      </Typography>
    </div>
  );
}

