'use client';

import { LoadingSpinner, Typography } from '@/shared/ui/components';

export function ReturnOrderLoading() {
  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col items-center justify-center gap-3">
      <LoadingSpinner size="lg" className="text-primary-600" />
      <Typography variant="caption" color="tertiary">
        Загрузка данных о возврате...
      </Typography>
    </div>
  );
}

