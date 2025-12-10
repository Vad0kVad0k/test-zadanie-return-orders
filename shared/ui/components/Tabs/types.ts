import React from 'react';

export type TTabsProps = {
  value: string;
  onChange: (value: string) => void;
  options: Array<{ value: string; label: string }>;
  className?: string;
} & React.PropsWithChildren;

