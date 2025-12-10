'use client';

import { Card, Typography } from '@/shared/ui/components';
import { ReturnOrderStatusBadge } from '@/entities/return-orders';
import { formatAmountRUB, formatLongDate } from '@/shared/lib';
import type { TReturnOrderInfoProps } from './types';

export function ReturnOrderInfo({ returnOrder }: TReturnOrderInfoProps) {
  return (
    <Card>
      <Card.Header>
        <Typography variant="h5">
          Общая информация
        </Typography>
      </Card.Header>
      <Card.Content>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Typography variant="caption" color="tertiary" className="mb-1">
              ID возврата
            </Typography>
            <Typography variant="body">
              {returnOrder.id}
            </Typography>
          </div>
          <div>
            <Typography variant="caption" color="tertiary" className="mb-1">
              ID заказа
            </Typography>
            <Typography variant="body">
              #{returnOrder.orderId}
            </Typography>
          </div>
          <div>
            <Typography variant="caption" color="tertiary" className="mb-1">
              Клиент
            </Typography>
            <Typography variant="body">
              {returnOrder.customerName}
            </Typography>
          </div>
          <div>
            <Typography variant="caption" color="tertiary" className="mb-1">
              Статус
            </Typography>
            <div>
              <ReturnOrderStatusBadge status={returnOrder.status} />
            </div>
          </div>
          <div>
            <Typography variant="caption" color="tertiary" className="mb-1">
              Сумма
            </Typography>
            <Typography variant="body">
              {formatAmountRUB(returnOrder.amount)}
            </Typography>
          </div>
          <div>
            <Typography variant="caption" color="tertiary" className="mb-1">
              Дата создания
            </Typography>
            <Typography variant="body">
              {formatLongDate(returnOrder.createdAt)}
            </Typography>
          </div>
        </div>
      </Card.Content>
    </Card>
  );
}

