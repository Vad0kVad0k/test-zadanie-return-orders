'use client';

import { TReturnOrderResponse } from '@/shared/api/return-order/types';
import { ReturnOrderStatusBadge } from '@/entities/return-orders';
import { Typography } from '@/shared/ui/components';
import { useRouter } from 'next/navigation';
import { formatAmountRUB, formatShortDate, routes } from '@/shared/lib';

type TReturnsTableProps = {
  returns: TReturnOrderResponse[];
  sortOrder?: 'asc' | 'desc';
  onSortChange?: (order: 'asc' | 'desc') => void;
};

export function ReturnsTable({
  returns,
  sortOrder = 'desc',
  onSortChange,
}: TReturnsTableProps) {
  const router = useRouter();

  const handleRowClick = (returnId: number) => {
    router.push(routes.RETURN_ORDERS.getUrl(returnId));
  };

  const handleSortClick = () => {
    if (onSortChange) {
      onSortChange(sortOrder === 'asc' ? 'desc' : 'asc');
    }
  };

  if (returns.length === 0) {
    return (
      <div className="text-center py-12">
        <Typography variant="body" color="tertiary">
          Нет возвратов
        </Typography>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-neutral-200 bg-neutral-50">
            <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-700">
              ID заказа
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-700">
              Клиент
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-700">
              Статус
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-700">
              Сумма
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-700">
              <button
                onClick={handleSortClick}
                className="flex items-center gap-2 hover:text-primary-600 transition-colors"
              >
                Дата создания
                <span className="text-xs">
                  {sortOrder === 'asc' ? '↑' : '↓'}
                </span>
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {returns.map((returnItem) => (
            <tr
              key={returnItem.id}
              onClick={() => handleRowClick(returnItem.id)}
              className="border-b border-neutral-100 hover:bg-neutral-50 cursor-pointer transition-colors"
            >
              <td className="px-4 py-3 text-sm text-neutral-900">
                #{returnItem.orderId}
              </td>
              <td className="px-4 py-3 text-sm text-neutral-700">
                {returnItem.customerName}
              </td>
              <td className="px-4 py-3">
                <ReturnOrderStatusBadge status={returnItem.status} />
              </td>
              <td className="px-4 py-3 text-sm font-medium text-neutral-900">
                {formatAmountRUB(returnItem.amount)}
              </td>
              <td className="px-4 py-3 text-sm text-neutral-600">
                {formatShortDate(returnItem.createdAt)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

