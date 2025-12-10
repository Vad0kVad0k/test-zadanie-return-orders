import React from 'react';

export type TButtonVariant = 'primary' | 'secondary';
export type TButtonSize = 'md';

export type TButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: TButtonVariant;
  size?: TButtonSize;
  isLoading?: boolean;
} & React.PropsWithChildren;
