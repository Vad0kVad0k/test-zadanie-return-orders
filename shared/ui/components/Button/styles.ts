import { TButtonVariant, TButtonSize } from './types';

export const variantStyles: Record<TButtonVariant, string> = {
  primary:
    'bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800 disabled:bg-neutral-300 disabled:text-neutral-500',
  secondary:
    'bg-white text-neutral-700 border border-neutral-300 hover:bg-neutral-50 active:bg-neutral-100 disabled:bg-neutral-100 disabled:text-neutral-400 disabled:border-neutral-200',
};

export const sizeStyles: Record<TButtonSize, string> = {
  md: 'px-4 py-2 text-base',
};

