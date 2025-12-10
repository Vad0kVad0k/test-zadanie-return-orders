export interface TProductsRequest {}
export type TProductsResponse = Array<{
    id: number;
    name: string;
    price: number;
}>