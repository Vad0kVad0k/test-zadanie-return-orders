import { TReturnOrderStatus } from "../status-history/types";

export type { TReturnOrderStatus };

export interface TReturnOrderRequest {}

export interface TReturnOrderResponse {
    id: number;
    orderId: number;
    customerName: string;
    status: TReturnOrderStatus;
    amount: number;
    createdAt: string;
}