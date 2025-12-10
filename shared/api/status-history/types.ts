export type TReturnOrderStatus = 'pending' | 'approved' | 'rejected' | 'in_review';

export interface TReturnOrderStatusHistoryRequest {
    returnOrderId: number;
}

export interface TReturnOrderStatusHistoryResponse {
    status: TReturnOrderStatus;
    date: string;
    comment?: string;
  } 