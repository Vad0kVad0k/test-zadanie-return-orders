import React from 'react';
import { TTypographyVariant, TTypographyColor } from './types';

export const variantStyles: Record<TTypographyVariant, string> = {
  h1: 'text-4xl font-bold leading-tight',
  h2: 'text-3xl font-bold leading-tight',
  h3: 'text-2xl font-semibold leading-tight',
  h4: 'text-xl font-semibold leading-normal',
  h5: 'text-lg font-semibold leading-normal',
  h6: 'text-base font-semibold leading-normal',
  body: 'text-base leading-normal',
  'body-sm': 'text-sm leading-normal',
  caption: 'text-sm leading-relaxed',
  'caption-sm': 'text-xs leading-relaxed',
};

export const colorStyles: Record<TTypographyColor, string> = {
  primary: 'text-neutral-900',
  secondary: 'text-neutral-600',
  tertiary: 'text-neutral-500',
  inverse: 'text-neutral-50',
  success: 'text-success-700',
  warning: 'text-warning-700',
  danger: 'text-danger-700',
};

export const defaultElements: Record<TTypographyVariant, React.ElementType> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  body: 'p',
  'body-sm': 'p',
  caption: 'span',
  'caption-sm': 'span',
};

