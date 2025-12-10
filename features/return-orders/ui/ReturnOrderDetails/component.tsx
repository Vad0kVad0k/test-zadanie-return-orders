'use client';

import { Button, Typography } from '@/shared/ui/components';
import {
  ReturnOrderInfo,
  ReturnOrderProducts,
  ReturnOrderStatusHistory,
} from '@/entities/return-orders';
import type { TReturnOrderDetailsProps } from './types';

export function ReturnOrderDetails({
  returnOrder,
  returnProducts,
  statusHistory,
  products,
  onBack,
}: TReturnOrderDetailsProps) {
  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-6">
          <Button variant="secondary" onClick={onBack}>
            ← Назад к списку
          </Button>
        </div>

        <div className="mb-6">
          <Typography variant="h1" className="mb-2">
            Детали возврата
          </Typography>
          <Typography variant="body" color="secondary">
            Полная информация о возврате #{returnOrder.id}
          </Typography>
        </div>

        <div className="space-y-6">
          <ReturnOrderInfo returnOrder={returnOrder} />
          <ReturnOrderProducts
            returnProducts={returnProducts}
            products={products}
          />
          <ReturnOrderStatusHistory statusHistory={statusHistory} />
        </div>
      </div>
    </div>
  );
}

