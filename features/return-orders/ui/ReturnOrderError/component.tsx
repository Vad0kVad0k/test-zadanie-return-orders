'use client';

import { Button, Typography } from '@/shared/ui/components';
import type { TReturnOrderErrorProps } from './types';

export function ReturnOrderError({
  error,
  onRetry,
  onBack,
}: TReturnOrderErrorProps) {
  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
        <Typography variant="h2" className="mb-2">
          Ошибка загрузки
        </Typography>
        <Typography variant="body" color="secondary" className="mb-4">
          {error instanceof Error
            ? error.message
            : 'Не удалось загрузить данные о возврате'}
        </Typography>
        <div className="flex gap-3">
          <Button onClick={onRetry}>Повторить</Button>
          <Button variant="secondary" onClick={onBack}>
            Вернуться к списку
          </Button>
        </div>
      </div>
    </div>
  );
}

