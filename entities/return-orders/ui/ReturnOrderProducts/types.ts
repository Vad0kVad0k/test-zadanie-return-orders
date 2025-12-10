import { TReturnOrderItem } from '@/shared/api/return-orders/types';
import { TProductsResponse } from '@/shared/api/products/types';

export interface TReturnOrderProductsProps {
  returnProducts: TReturnOrderItem[];
  products: TProductsResponse | undefined;
}

