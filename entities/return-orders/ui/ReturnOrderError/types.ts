export interface TReturnOrderErrorProps {
  error?: Error | null;
  message?: string;
  onRetry: () => void;
  onBack?: () => void;
  fullScreen?: boolean;
}

