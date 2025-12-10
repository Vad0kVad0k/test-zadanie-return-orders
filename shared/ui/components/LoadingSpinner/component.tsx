'use client';

import { cn } from '@/shared/lib/utils';
import { TLoadingSpinnerProps } from './types';
import { sizeClasses, spinnerBaseStyles } from './styles';

function LoadingSpinner({ size = 'md', className }: TLoadingSpinnerProps) {
  return (
    <div
      className={cn(spinnerBaseStyles, sizeClasses[size], className)}
      role="status"
      aria-label="Загрузка"
    >
      <span className="sr-only">Загрузка...</span>
    </div>
  );
}

export default LoadingSpinner;

