import { TReturnOrderResponse } from "../return-order/types";


export interface TReturnOrdersRequest {}
export type TReturnOrdersResponse = TReturnOrderResponse[]


export interface TReturnOrderItem {
  productId: number;
  quantity: number;
  reason: string;
}





