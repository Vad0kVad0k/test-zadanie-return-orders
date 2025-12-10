'use client';

import React, { useId } from 'react';
import { cn } from '@/shared/lib/utils';
import { TInputProps } from './types';
import {
  inputBaseStyles,
  inputErrorStyles,
  inputNormalStyles,
  labelStyles,
  errorTextStyles,
} from './styles';

const Input = React.forwardRef<HTMLInputElement, TInputProps>(
  ({ label, error, className, id, ...props }, ref) => {
    const generatedId = useId();
    const inputId = id || generatedId;

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={inputId} className={labelStyles}>
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            inputBaseStyles,
            error ? inputErrorStyles : inputNormalStyles,
            className
          )}
          {...props}
        />
        {error && <p className={errorTextStyles}>{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;

