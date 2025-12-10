'use client';

import React from 'react';
import { cn } from '@/shared/lib/utils';
import { TTypographyProps } from './types';
import { variantStyles, colorStyles, defaultElements } from './styles';

const Typography = React.forwardRef<HTMLElement, TTypographyProps>(
  (
    {
      variant = 'body',
      color = 'primary',
      className,
      children,
      as,
      ...props
    },
    ref
  ) => {
    const Component = (as || defaultElements[variant]) as React.ElementType;
    const baseStyles = variantStyles[variant];
    const colorClass = colorStyles[color];

    return (
      <Component
        ref={ref}
        className={cn(baseStyles, colorClass, className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Typography.displayName = 'Typography';

export default Typography;

