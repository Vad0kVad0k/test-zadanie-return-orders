'use client';

import { HydrationBoundary, DehydratedState } from '@tanstack/react-query';
import { ReturnOrdersPageContent } from '@/features/return-orders';

type TReturnOrdersPageProps = {
  dehydratedState?: DehydratedState;
};

export default function ReturnOrdersPage({}: TReturnOrdersPageProps) {
  return <ReturnOrdersPageContent />;
}

