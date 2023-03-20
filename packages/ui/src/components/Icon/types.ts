export type AllowedIcons =
  | 'check'
  | 'home'
  | 'data'
  | 'filters'
  | 'home'
  | 'range'
  | 'report'
  | 'experian'
  | 'circle'
  | 'completed';

export interface IconProps {
  name: AllowedIcons;
  width?: number | string;
  height?: number | string;
  color?: string;
}
