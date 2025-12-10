import { TReturnOrderResponse } from '@/shared/api/return-order/types';
import { TReturnOrderItem } from '@/shared/api/return-orders/types';
import { TReturnOrderStatusHistoryResponse } from '@/shared/api/status-history/types';
import { TProductsResponse } from '@/shared/api/products/types';

export interface TReturnOrderDetailsProps {
  returnOrder: TReturnOrderResponse;
  returnProducts: TReturnOrderItem[];
  statusHistory: TReturnOrderStatusHistoryResponse[];
  products: TProductsResponse | undefined;
  onBack: () => void;
}

