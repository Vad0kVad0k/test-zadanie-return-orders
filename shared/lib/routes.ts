export const routes = {
  HOME: {
    path: '/',
    getUrl: () => '/',
  },
  RETURN_ORDERS_LIST: {
    path: '/return-orders',
    getUrl: () => routes.RETURN_ORDERS_LIST.path,
  },
  RETURN_ORDERS: {
    path: '/return-orders/:id',
    getUrl: (id: number | string) => routes.RETURN_ORDERS.path.replace(':id', String(id)),
  },
  
} as const;

export type TRoutes = typeof routes;

