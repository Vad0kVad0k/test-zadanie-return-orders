'use client';

import { Typography } from '@/shared/ui/components';
import type { TReturnOrderEmptyProps } from './types';

export function ReturnOrderEmpty({
  message = 'Нет возвратов',
  filteredMessage = 'Нет возвратов по выбранному фильтру',
  hasFilter = false,
}: TReturnOrderEmptyProps) {
  return (
    <div className="text-center py-12">
      <Typography variant="body" color="tertiary">
        {hasFilter ? filteredMessage : message}
      </Typography>
    </div>
  );
}

