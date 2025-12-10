import type { TReturnOrderItem } from '@/shared/api/return-orders/types';
import { delay } from '../libs/helpers';

const mockReturnProducts: Record<number, TReturnOrderItem[]> = {
  1: [{ productId: 1, quantity: 1, reason: 'Не подошел размер экрана' }],
  2: [{ productId: 2, quantity: 1, reason: 'Бракованный товар' }],
  3: [{ productId: 3, quantity: 1, reason: 'Не понравился цвет' }],
  4: [{ productId: 4, quantity: 1, reason: 'Не работает одна клавиша' }],
  5: [{ productId: 5, quantity: 2, reason: 'Не подошла по размеру' }],
  6: [{ productId: 6, quantity: 1, reason: 'Обнаружен дефект экрана' }],
  7: [{ productId: 7, quantity: 1, reason: 'Не устраивает качество' }],
  8: [{ productId: 8, quantity: 1, reason: 'Мертвые пиксели' }],
  9: [{ productId: 9, quantity: 1, reason: 'Не работает Bluetooth' }],
  10: [{ productId: 10, quantity: 3, reason: 'Не подошел размер' }],
  11: [{ productId: 11, quantity: 1, reason: 'Неисправны переключатели' }],
  12: [{ productId: 12, quantity: 1, reason: 'Не держит заряд' }],
  13: [{ productId: 13, quantity: 1, reason: 'Медленная скорость записи' }],
  14: [{ productId: 14, quantity: 1, reason: 'Не работает перо' }],
  15: [{ productId: 15, quantity: 1, reason: 'Посторонние шумы' }],
};

export async function getReturnOrderProducts(
  returnOrderId: number
): Promise<TReturnOrderItem[]> {
  await delay(200);
  return mockReturnProducts[returnOrderId] || [];
}

