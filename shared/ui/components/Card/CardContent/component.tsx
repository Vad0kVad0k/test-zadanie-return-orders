'use client';

import React from 'react';
import { cn } from '@/shared/lib/utils';
import { TCardContentProps } from './types';
import { cardContentBaseStyles } from './styles';

const CardContent: React.FC<TCardContentProps> = ({ children, className }) => {
  return <div className={cn(cardContentBaseStyles, className)}>{children}</div>;
};

CardContent.displayName = 'Card.Content';

export default CardContent;

