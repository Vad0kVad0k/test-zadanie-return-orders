import type { TReturnOrderStatusHistoryResponse } from '@/shared/api/status-history/types';
import { delay } from '../libs/helpers';

const mockReturnStatusHistory: Record<number, TReturnOrderStatusHistoryResponse[]> = {
  1: [{ status: 'pending', date: '2024-01-15T10:30:00Z', comment: 'Заявка создана' }],
  2: [
    { status: 'pending', date: '2024-01-14T14:20:00Z', comment: 'Заявка создана' },
    { status: 'in_review', date: '2024-01-14T16:45:00Z', comment: 'Отправлено на проверку' },
    { status: 'approved', date: '2024-01-15T09:15:00Z', comment: 'Одобрено менеджером' },
  ],
  3: [
    { status: 'pending', date: '2024-01-13T11:10:00Z', comment: 'Заявка создана' },
    { status: 'in_review', date: '2024-01-13T15:30:00Z', comment: 'Отправлено на проверку' },
    { status: 'rejected', date: '2024-01-14T10:00:00Z', comment: 'Отклонено: товар использован' },
  ],
  4: [
    { status: 'pending', date: '2024-01-16T08:45:00Z', comment: 'Заявка создана' },
    { status: 'in_review', date: '2024-01-16T12:00:00Z', comment: 'Отправлено на проверку' },
  ],
  5: [{ status: 'pending', date: '2024-01-16T15:20:00Z', comment: 'Заявка создана' }],
  6: [
    { status: 'pending', date: '2024-01-12T09:30:00Z', comment: 'Заявка создана' },
    { status: 'in_review', date: '2024-01-12T13:15:00Z', comment: 'Отправлено на проверку' },
    { status: 'approved', date: '2024-01-13T11:00:00Z', comment: 'Одобрено менеджером' },
  ],
  7: [
    { status: 'pending', date: '2024-01-11T16:40:00Z', comment: 'Заявка создана' },
    { status: 'in_review', date: '2024-01-12T10:20:00Z', comment: 'Отправлено на проверку' },
    { status: 'rejected', date: '2024-01-12T14:30:00Z', comment: 'Отклонено: товар в рабочем состоянии' },
  ],
  8: [
    { status: 'pending', date: '2024-01-10T13:25:00Z', comment: 'Заявка создана' },
    { status: 'in_review', date: '2024-01-10T17:00:00Z', comment: 'Отправлено на проверку' },
    { status: 'approved', date: '2024-01-11T09:45:00Z', comment: 'Одобрено менеджером' },
  ],
  9: [
    { status: 'pending', date: '2024-01-17T10:15:00Z', comment: 'Заявка создана' },
    { status: 'in_review', date: '2024-01-17T14:30:00Z', comment: 'Отправлено на проверку' },
  ],
  10: [{ status: 'pending', date: '2024-01-17T16:50:00Z', comment: 'Заявка создана' }],
  11: [
    { status: 'pending', date: '2024-01-11T08:15:00Z', comment: 'Заявка создана' },
    { status: 'in_review', date: '2024-01-11T11:30:00Z', comment: 'Отправлено на проверку' },
    { status: 'approved', date: '2024-01-12T09:00:00Z', comment: 'Подтвержден дефект' },
  ],
  12: [
    { status: 'pending', date: '2024-01-18T13:20:00Z', comment: 'Заявка создана' },
    { status: 'in_review', date: '2024-01-18T15:45:00Z', comment: 'На экспертизе' },
  ],
  13: [
    { status: 'pending', date: '2024-01-09T10:00:00Z', comment: 'Заявка создана' },
    { status: 'in_review', date: '2024-01-09T14:20:00Z', comment: 'Отправлено на проверку' },
    { status: 'rejected', date: '2024-01-10T10:30:00Z', comment: 'Соответствует спецификации' },
  ],
  14: [{ status: 'pending', date: '2024-01-19T09:30:00Z', comment: 'Заявка создана' }],
  15: [
    { status: 'pending', date: '2024-01-08T16:45:00Z', comment: 'Заявка создана' },
    { status: 'in_review', date: '2024-01-09T10:15:00Z', comment: 'Отправлено на проверку' },
    { status: 'approved', date: '2024-01-10T14:00:00Z', comment: 'Подтвержден дефект' },
  ],
};

export async function getReturnOrderStatusHistory(
  returnOrderId: number
): Promise<TReturnOrderStatusHistoryResponse[]> {
  await delay(200);
  return mockReturnStatusHistory[returnOrderId] || [];
}

