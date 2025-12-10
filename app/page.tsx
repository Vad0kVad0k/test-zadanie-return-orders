import { redirect } from 'next/navigation';
import { routes } from '@/shared/lib';

export default function Home() {
  redirect(routes.RETURN_ORDERS_LIST.getUrl());
}
