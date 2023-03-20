import {
  List,
  ListItem,
  Link,
  Box,
  useMultiStyleConfig,
  useToken,
  Spacer,
  Tag,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { Icon } from '../Icon';
import { SidebarItemProps, SidebarProps } from './types';

export const Sidebar = ({ children }: SidebarProps) => {
  const styles = useMultiStyleConfig('SideBar', {});

  return (
    <Box sx={styles.sidebarContainer}>
      <List>{children}</List>
    </Box>
  );
};

export function SidebarItem({
  path,
  icon,
  text,
  activityCount,
  variant = 'light',
}: SidebarItemProps) {
  const styles = useMultiStyleConfig('SideBar', {});
  const activeBGToken = (styles.activeLink.bg ??
    'pastels.marianBlue') as string;
  const activeBorderToken = (styles.activeLink.borderLeftColor ??
    'primary.magenta') as string;

  const [activeBg, activeBorder] = useToken('colors', [
    activeBGToken,
    activeBorderToken,
  ]);

  return (
    <ListItem>
      <Link
        as={NavLink}
        to={path}
        variant={variant}
        size="xl"
        sx={styles.navItem}
        // the props from the 'as' interface are not overriding the below props, so just force the types
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        style={({ isActive }: { isActive: boolean }) =>
          isActive
            ? {
                backgroundColor: activeBg,
                borderLeftColor: activeBorder,
                outline: 'none',
              }
            : {}
        }
      >
        {icon !== undefined && icon !== null && (
          <Box mr="4">
            <Icon name={icon} />
          </Box>
        )}
        {text}
        <Spacer />
        <Box ml="4" w="45">
          {activityCount ? (
            <Tag size="md" variant="solid" sx={styles.tag}>
              {activityCount}
            </Tag>
          ) : (
            ''
          )}
        </Box>
      </Link>
    </ListItem>
  );
}
