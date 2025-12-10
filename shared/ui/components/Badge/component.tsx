'use client';

import React from 'react';
import { cn } from '@/shared/lib/utils';
import { TBadgeProps } from './types';
import { variantStyles, badgeBaseStyles } from './styles';

const Badge: React.FC<TBadgeProps> = ({
  variant = 'default',
  children,
  className,
}) => {
  return (
    <span
      className={cn(badgeBaseStyles, variantStyles[variant], className)}
    >
      {children}
    </span>
  );
};

export default Badge;

