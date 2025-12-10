'use client';

import React from 'react';
import { Button, Typography } from '@/shared/ui/components';
import { logError } from './error-handler';

type TErrorBoundaryState = {
  hasError: boolean;
  error: Error | null;
};

type TErrorBoundaryProps = {
  fallback?: React.ComponentType<TErrorFallbackProps>;
} & React.PropsWithChildren;

type TErrorFallbackProps = {
  error: Error | null;
  resetError: () => void;
};

class ErrorBoundaryClass extends React.Component<
  TErrorBoundaryProps,
  TErrorBoundaryState
> {
  constructor(props: TErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): TErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    logError(error, {
      component: 'ErrorBoundary',
      action: 'componentDidCatch',
      metadata: {
        componentStack: errorInfo.componentStack,
      },
    });
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      const Fallback = this.props.fallback || DefaultErrorFallback;
      return (
        <Fallback error={this.state.error} resetError={this.handleReset} />
      );
    }

    return this.props.children;
  }
}

const DefaultErrorFallback: React.FC<TErrorFallbackProps> = ({
  error,
  resetError,
}) => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-50 px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
        <Typography variant="h2" className="mb-2">
          Что-то пошло не так
        </Typography>
        <Typography variant="body" color="secondary" className="mb-4">
          Произошла непредвиденная ошибка. Пожалуйста, попробуйте обновить
          страницу.
        </Typography>
        {error && (
          <details className="mb-4">
            <summary className="cursor-pointer mb-2">
              <Typography variant="caption" color="tertiary">
                Детали ошибки
              </Typography>
            </summary>
            <pre className="text-xs bg-neutral-100 p-3 rounded overflow-auto">
              {error.message}
            </pre>
          </details>
        )}
        <div className="flex gap-3">
          <Button onClick={resetError} variant="primary">
            Повторить
          </Button>
          <Button
            variant="secondary"
            onClick={() => window.location.reload()}
          >
            Обновить страницу
          </Button>
        </div>
      </div>
    </div>
  );
};

export const ErrorBoundary: React.FC<TErrorBoundaryProps> = (props) => {
  return <ErrorBoundaryClass {...props} />;
};

