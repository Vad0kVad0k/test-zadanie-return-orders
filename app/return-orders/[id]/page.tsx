'use client';

import { use } from 'react';
import { ReturnOrderStatusBadge } from '@/entities/return-orders';
import {
  Card,
  Button,
  LoadingSpinner,
  Typography,
} from '@/shared/ui/components';
import { useRouter } from 'next/navigation';
import { formatAmountRUB, formatLongDate, routes } from '@/shared/lib';
import { returnOrderHook } from '@/shared/api/return-order';
import { useReturnOrderProductsHook, useProducts } from '@/shared/api/products/hook';
import { useReturnOrderStatusHistoryHook } from '@/shared/api/status-history/hook';

export default function ReturnDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();
  const { id } = use(params);
  const returnId = Number(id);
  
  const { data: returnData, isLoading, error, refetch } = returnOrderHook.useReturnOrderHook(returnId);
  const { data: products } = useProducts();
  const { data: returnProducts, isLoading: isLoadingProducts } = useReturnOrderProductsHook(returnId);
  const { data: statusHistory, isLoading: isLoadingHistory } = useReturnOrderStatusHistoryHook(returnId);

  if (isLoading || isLoadingProducts || isLoadingHistory) {
    return (
      <div className="min-h-screen bg-neutral-50 flex flex-col items-center justify-center gap-3">
        <LoadingSpinner size="lg" className="text-primary-600" />
        <Typography variant="caption" color="tertiary">
          Загрузка данных о возврате...
        </Typography>
      </div>
    );
  }

  if (error || !returnData) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
          <Typography variant="h2" className="mb-2">
            Ошибка загрузки
          </Typography>
          <Typography variant="body" color="secondary" className="mb-4">
            {error instanceof Error
              ? error.message
              : 'Не удалось загрузить данные о возврате'}
          </Typography>
          <div className="flex gap-3">
            <Button onClick={() => refetch()}>Повторить</Button>
            <Button variant="secondary" onClick={() => router.push(routes.RETURN_ORDERS_LIST.getUrl())}>
              Вернуться к списку
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-6">
          <Button variant="secondary" onClick={() => router.push(routes.RETURN_ORDERS_LIST.getUrl())}>
            ← Назад к списку
          </Button>
        </div>

        <div className="mb-6">
          <Typography variant="h1" className="mb-2">
            Детали возврата
          </Typography>
          <Typography variant="body" color="secondary">
            Полная информация о возврате #{returnData.id}
          </Typography>
        </div>

        <div className="space-y-6">
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
                    {returnData.id}
                  </Typography>
                </div>
                <div>
                  <Typography variant="caption" color="tertiary" className="mb-1">
                    ID заказа
                  </Typography>
                  <Typography variant="body">
                    #{returnData.orderId}
                  </Typography>
                </div>
                <div>
                  <Typography variant="caption" color="tertiary" className="mb-1">
                    Клиент
                  </Typography>
                  <Typography variant="body">
                    {returnData.customerName}
                  </Typography>
                </div>
                <div>
                  <Typography variant="caption" color="tertiary" className="mb-1">
                    Статус
                  </Typography>
                  <div>
                    <ReturnOrderStatusBadge status={returnData.status} />
                  </div>
                </div>
                <div>
                  <Typography variant="caption" color="tertiary" className="mb-1">
                    Сумма
                  </Typography>
                  <Typography variant="body">
                    {formatAmountRUB(returnData.amount)}
                  </Typography>
                </div>
                <div>
                  <Typography variant="caption" color="tertiary" className="mb-1">
                    Дата создания
                  </Typography>
                  <Typography variant="body">
                    {formatLongDate(returnData.createdAt)}
                  </Typography>
                </div>
              </div>
            </Card.Content>
          </Card>

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
                    {returnProducts?.map((item, index) => {
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

          <Card>
            <Card.Header>
              <Typography variant="h5">
                История статусов
              </Typography>
            </Card.Header>
            <Card.Content>
              <div className="space-y-4">
                {statusHistory?.map((history, index) => (
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
        </div>
      </div>
    </div>
  );
}

