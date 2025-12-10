'use client';

import { LoadingSpinner, Typography } from '@/shared/ui/components';
import type { TReturnOrderLoadingProps } from './types';

export function ReturnOrderLoading({
  message = 'Загрузка данных...',
  fullScreen = false,
}: TReturnOrderLoadingProps) {
  const containerClassName = fullScreen
    ? 'min-h-screen bg-neutral-50 flex flex-col items-center justify-center gap-3'
    : 'flex flex-col items-center justify-center py-12 gap-3';

  return (
    <div className={containerClassName}>
      <LoadingSpinner size="lg" className="text-primary-600" />
      <Typography variant="caption" color="tertiary">
        {message}
      </Typography>
    </div>
  );
}

