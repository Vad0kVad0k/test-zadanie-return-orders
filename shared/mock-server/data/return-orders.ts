import { TReturnOrderResponse } from '@/shared/api/return-order/types';
import { delay } from '../libs/helpers';

const mockReturnOrders = [
  {
    id: 1,
    orderId: 1001,
    customerName: 'Иван Петров',
    status: 'pending' as const,
    amount: 12500,
    createdAt: '2024-01-15T10:30:00Z',
  },
  {
    id: 2,
    orderId: 1002,
    customerName: 'Мария Сидорова',
    status: 'approved' as const,
    amount: 3500,
    createdAt: '2024-01-14T14:20:00Z',
  },
  {
    id: 3,
    orderId: 1003,
    customerName: 'Алексей Козлов',
    status: 'rejected' as const,
    amount: 8900,
    createdAt: '2024-01-13T11:10:00Z',
  },
  {
    id: 4,
    orderId: 1004,
    customerName: 'Елена Волкова',
    status: 'in_review' as const,
    amount: 2100,
    createdAt: '2024-01-16T08:45:00Z',
  },
  {
    id: 5,
    orderId: 1005,
    customerName: 'Дмитрий Соколов',
    status: 'pending' as const,
    amount: 5600,
    createdAt: '2024-01-16T15:20:00Z',
  },
  {
    id: 6,
    orderId: 1006,
    customerName: 'Ольга Новикова',
    status: 'approved' as const,
    amount: 12000,
    createdAt: '2024-01-12T09:30:00Z',
  },
  {
    id: 7,
    orderId: 1007,
    customerName: 'Сергей Морозов',
    status: 'rejected' as const,
    amount: 4500,
    createdAt: '2024-01-11T16:40:00Z',
  },
  {
    id: 8,
    orderId: 1008,
    customerName: 'Анна Лебедева',
    status: 'approved' as const,
    amount: 7800,
    createdAt: '2024-01-10T13:25:00Z',
  },
  {
    id: 9,
    orderId: 1009,
    customerName: 'Павел Орлов',
    status: 'in_review' as const,
    amount: 3200,
    createdAt: '2024-01-17T10:15:00Z',
  },
  {
    id: 10,
    orderId: 1010,
    customerName: 'Татьяна Федорова',
    status: 'pending' as const,
    amount: 1500,
    createdAt: '2024-01-17T16:50:00Z',
  },
  {
    id: 11,
    orderId: 1011,
    customerName: 'Владимир Смирнов',
    status: 'approved' as const,
    amount: 18900,
    createdAt: '2024-01-11T08:15:00Z',
  },
  {
    id: 12,
    orderId: 1012,
    customerName: 'Наталья Кузнецова',
    status: 'in_review' as const,
    amount: 6700,
    createdAt: '2024-01-18T13:20:00Z',
  },
  {
    id: 13,
    orderId: 1013,
    customerName: 'Андрей Попов',
    status: 'rejected' as const,
    amount: 4200,
    createdAt: '2024-01-09T10:00:00Z',
  },
  {
    id: 14,
    orderId: 1014,
    customerName: 'Екатерина Соколова',
    status: 'pending' as const,
    amount: 9500,
    createdAt: '2024-01-19T09:30:00Z',
  },
  {
    id: 15,
    orderId: 1015,
    customerName: 'Михаил Лебедев',
    status: 'approved' as const,
    amount: 13400,
    createdAt: '2024-01-08T16:45:00Z',
  },
].slice(0, 15) as TReturnOrderResponse[];

export async function getReturns(): Promise<TReturnOrderResponse[]> {
  await delay(500);
  return [...mockReturnOrders];
}

export async function getReturnsPaginated(
  page: number,
  pageSize: number = 5
): Promise<{ data: TReturnOrderResponse[]; hasMore: boolean }> {
  await delay(500);
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const data = mockReturnOrders.slice(start, end);
  const hasMore = end < mockReturnOrders.length;
  return { data, hasMore };
}

export async function getReturnById(id: number): Promise<TReturnOrderResponse | null> {
  await delay(300);
  return mockReturnOrders.find((r) => r.id === id) || null;
}

export async function getReturnsWithError(): Promise<TReturnOrderResponse[]> {
  await delay(500);
  throw new Error('Не удалось загрузить список возвратов. Попробуйте позже.');
}

