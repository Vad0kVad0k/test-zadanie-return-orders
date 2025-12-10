export type TBadgeVariant =
  | 'default'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info';

export type TBadgeProps = {
  variant?: TBadgeVariant;
  className?: string;
} & React.PropsWithChildren;

