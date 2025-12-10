'use client';

import React from 'react';
import { cn } from '@/shared/lib/utils';
import { TCardProps } from './types';
import { cardBaseStyles } from './styles';
import CardHeader from './CardHeader';
import CardContent from './CardContent';
import CardFooter from './CardFooter';

const Card: React.FC<TCardProps> & {
  Header: typeof CardHeader;
  Content: typeof CardContent;
  Footer: typeof CardFooter;
} = ({ children, className }) => {
  return (
    <div className={cn(cardBaseStyles, className)}>{children}</div>
  );
};

Card.Header = CardHeader;
Card.Content = CardContent;
Card.Footer = CardFooter;

Card.displayName = 'Card';

export default Card;

