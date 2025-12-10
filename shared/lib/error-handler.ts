export interface TErrorContext {
  component?: string;
  action?: string;
  metadata?: Record<string, unknown>;
}

export function logError(error: Error | unknown, context?: TErrorContext): void {
  const errorMessage = error instanceof Error ? error.message : String(error);
  const errorStack = error instanceof Error ? error.stack : undefined;

  console.error('[Error]', {
    message: errorMessage,
    stack: errorStack,
    context,
    timestamp: new Date().toISOString(),
  });
}

