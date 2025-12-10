'use client';

import React from 'react';
import { cn } from '@/shared/lib/utils';
import { TTabsProps } from './types';
import {
  tabsContainerStyles,
  tabButtonStyles,
  tabButtonActiveStyles,
  tabButtonInactiveStyles,
} from './styles';

const Tabs: React.FC<TTabsProps> = ({
  value,
  onChange,
  options,
  className,
}) => {
  return (
    <div className={cn(tabsContainerStyles, className)}>
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => onChange(option.value)}
          className={cn(
            tabButtonStyles,
            value === option.value
              ? tabButtonActiveStyles
              : tabButtonInactiveStyles
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;

