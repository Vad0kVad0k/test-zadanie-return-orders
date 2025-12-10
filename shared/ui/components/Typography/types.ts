import React from 'react';

export type TTypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'body'
  | 'body-sm'
  | 'caption'
  | 'caption-sm';

export type TTypographyColor =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'inverse'
  | 'success'
  | 'warning'
  | 'danger';

export type TTypographyProps = {
  variant?: TTypographyVariant;
  color?: TTypographyColor;
  className?: string;
  as?: React.ElementType;
} & React.PropsWithChildren;

