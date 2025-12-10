import { QueryClient, dehydrate } from '@tanstack/react-query';
import ReturnsPageClient from './ReturnsPageClient';
import { getReturnOrdersApi } from '@/shared/api/return-orders/api';

export default async function ReturnOrdersPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['return-orders'],
    queryFn: async () => {
      return await getReturnOrdersApi();
    },
  });

  return <ReturnsPageClient dehydratedState={dehydrate(queryClient)} />;
}
