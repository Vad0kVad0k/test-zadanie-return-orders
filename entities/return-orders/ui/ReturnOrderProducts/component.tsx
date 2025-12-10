'use client';

import { Card, Typography } from '@/shared/ui/components';
import { formatAmountRUB } from '@/shared/lib';
import type { TReturnOrderProductsProps } from './types';

export function ReturnOrderProducts({
  returnProducts,
  products,
}: TReturnOrderProductsProps) {
  return (
    <Card>
      <Card.Header>
        <Typography variant="h5">
          Товары в возврате
        </Typography>
      </Card.Header>
      <Card.Content>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-neutral-200 bg-neutral-50">
                <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-700">
                  Товар
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-700">
                  Количество
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-700">
                  Цена
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-700">
                  Причина возврата
                </th>
              </tr>
            </thead>
            <tbody>
              {returnProducts.map((item, index) => {
                const product = products?.find((p) => p.id === item.productId);
                return (
                  <tr
                    key={`${item.productId}-${index}`}
                    className="border-b border-neutral-100"
                  >
                    <td className="px-4 py-3 text-sm text-neutral-900">
                      {product?.name || 'Товар не найден'}
                    </td>
                    <td className="px-4 py-3 text-sm text-neutral-700">
                      {item.quantity}
                    </td>
                    <td className="px-4 py-3 text-sm font-medium text-neutral-900">
                      {product ? formatAmountRUB(product.price) : '-'}
                    </td>
                    <td className="px-4 py-3 text-sm text-neutral-700">
                      {item.reason}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card.Content>
    </Card>
  );
}

