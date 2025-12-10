'use client';

import { Button, Typography } from '@/shared/ui/components';
import type { TReturnOrdersErrorProps } from './types';

export function ReturnOrdersError({ onRetry }: TReturnOrdersErrorProps) {
  return (
    <div className="py-12 text-center">
      <Typography variant="body" color="danger" className="mb-4">
        Ошибка загрузки данных
      </Typography>
      <Button onClick={onRetry}>Повторить</Button>
    </div>
  );
}

