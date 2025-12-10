'use client';

import { LoadingSpinner, Typography } from '@/shared/ui/components';

export function ReturnOrdersLoading() {
  return (
    <div className="flex flex-col items-center justify-center py-12 gap-3">
      <LoadingSpinner size="lg" className="text-primary-600" />
      <Typography variant="caption" color="tertiary">
        Загрузка данных...
      </Typography>
    </div>
  );
}

