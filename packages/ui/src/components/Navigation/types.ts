import { ThemingProps } from '@chakra-ui/react';
import { ReactElement } from 'react';
import { AllowedIcons } from '../Icon';

export interface SidebarItemProps {
  path: string;
  text: string;
  variant?: ThemingProps<'Link'>['variant'];
  icon?: AllowedIcons;
  activityCount?: number;
}

export interface SidebarProps {
  children: Array<ReactElement<SidebarItemProps>>;
}

export interface MenuItemProps {
  name: string;
  path: string;
  icon?: AllowedIcons;
  next?: string;
}

export interface MenuProps {
  children: Array<ReactElement<MenuItemProps>>;
}

export interface TabbedNavigationItemProps {
  path: string;
  children: React.ReactNode;
}

export interface IContent {
  content: string;
}

export interface TabbedNavigationProps {
  children: React.ReactNode;
  tabContents: Array<IContent>;
}
