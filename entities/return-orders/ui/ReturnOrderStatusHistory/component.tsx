'use client';

import { Card, Typography } from '@/shared/ui/components';
import { ReturnOrderStatusBadge } from '@/entities/return-orders';
import { formatLongDate } from '@/shared/lib';
import type { TReturnOrderStatusHistoryProps } from './types';

export function ReturnOrderStatusHistory({
  statusHistory,
}: TReturnOrderStatusHistoryProps) {
  return (
    <Card>
      <Card.Header>
        <Typography variant="h5">
          История статусов
        </Typography>
      </Card.Header>
      <Card.Content>
        <div className="space-y-4">
          {statusHistory.map((history, index) => (
            <div
              key={index}
              className="flex items-start gap-4 pb-4 border-b border-neutral-100 last:border-0 last:pb-0"
            >
              <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary-500 mt-2" />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <ReturnOrderStatusBadge status={history.status} />
                  <Typography variant="caption" color="tertiary">
                    {formatLongDate(history.date)}
                  </Typography>
                </div>
                {history.comment && (
                  <Typography variant="caption" color="secondary">
                    {history.comment}
                  </Typography>
                )}
              </div>
            </div>
          ))}
        </div>
      </Card.Content>
    </Card>
  );
}

