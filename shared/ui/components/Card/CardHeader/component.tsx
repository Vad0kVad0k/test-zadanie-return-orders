'use client';

import React from 'react';
import { cn } from '@/shared/lib/utils';
import { TCardHeaderProps } from './types';
import { cardHeaderBaseStyles } from './styles';

const CardHeader: React.FC<TCardHeaderProps> = ({ children, className }) => {
  return (
    <div className={cn(cardHeaderBaseStyles, className)}>{children}</div>
  );
};

CardHeader.displayName = 'Card.Header';

export default CardHeader;

