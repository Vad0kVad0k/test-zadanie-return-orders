'use client';

import { Button, Typography } from '@/shared/ui/components';
import type { TReturnOrderErrorProps } from './types';

export function ReturnOrderError({
  error,
  message,
  onRetry,
  onBack,
  fullScreen = false,
}: TReturnOrderErrorProps) {
  const errorMessage =
    message ||
    (error instanceof Error
      ? error.message
      : 'Не удалось загрузить данные');

  if (fullScreen) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
          <Typography variant="h2" className="mb-2">
            Ошибка загрузки
          </Typography>
          <Typography variant="body" color="secondary" className="mb-4">
            {errorMessage}
          </Typography>
          <div className="flex gap-3">
            <Button onClick={onRetry}>Повторить</Button>
            {onBack && (
              <Button variant="secondary" onClick={onBack}>
                Вернуться к списку
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 text-center">
      <Typography variant="body" color="danger" className="mb-4">
        {errorMessage}
      </Typography>
      <Button onClick={onRetry}>Повторить</Button>
    </div>
  );
}

