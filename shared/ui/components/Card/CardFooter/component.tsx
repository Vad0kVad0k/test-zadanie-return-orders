'use client';

import React from 'react';
import { cn } from '@/shared/lib/utils';
import { TCardFooterProps } from './types';
import { cardFooterBaseStyles } from './styles';

const CardFooter: React.FC<TCardFooterProps> = ({ children, className }) => {
  return <div className={cn(cardFooterBaseStyles, className)}>{children}</div>;
};

CardFooter.displayName = 'Card.Footer';

export default CardFooter;

