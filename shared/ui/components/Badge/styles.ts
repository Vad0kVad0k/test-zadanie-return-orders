import { TBadgeVariant } from './types';

export const variantStyles: Record<TBadgeVariant, string> = {
  default: 'bg-neutral-200 text-neutral-800 border border-neutral-300',
  success: 'bg-[#22c55e] text-white border border-[#16a34a]',
  warning: 'bg-[#f59e0b] text-white border border-[#d97706]',
  danger: 'bg-[#ef4444] text-white border border-[#dc2626]',
  info: 'bg-[#0ea5e9] text-white border border-[#0284c7]',
};

export const badgeBaseStyles =
  'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium';

