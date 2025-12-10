export interface TReturnOrderErrorProps {
  error: Error | null;
  onRetry: () => void;
  onBack: () => void;
}

