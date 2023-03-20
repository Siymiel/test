import { Tabs, TabList, TabPanels, TabPanel } from '@chakra-ui/react';
import { NavLink, useLocation } from 'react-router-dom';
import { useMultiStyleConfig, useTab, Box, Button } from '@chakra-ui/react';
import { Icon } from '../Icon';
import { TabbedNavigationItemProps, TabbedNavigationProps } from './types';

export const TabbedNavigationItem = ({
  path,
  children,
  ...props
}: TabbedNavigationItemProps) => {
  const tabProps = useTab(props);
  const isSelected = !!tabProps['aria-selected'];

  const styles = useMultiStyleConfig('Tabs', tabProps);

  const { pathname } = useLocation();
  const isActive = pathname === path;

  return (
    <Button
      __css={styles.tab}
      {...tabProps}
      display="flex"
      outline="none"
      data-testid="customTabButton"
      as={NavLink}
      to={path}
      isActive={isActive}
      _active={{ outline: 'none' }}
    >
      {children}
      <Box
        as="span"
        ml="2"
        mt="-2"
        py="1"
        color="primary.raspberry"
        outline="none"
        border="none"
      >
        {isSelected ? (
          <Icon
            name="circle"
            width={10}
            height={10}
            color="primary.raspberry"
          />
        ) : (
          ''
        )}
      </Box>
    </Button>
  );
};

export const TabbedNavigation = ({
  children,
  tabContents,
}: TabbedNavigationProps) => {
  return (
    <Tabs>
      <TabList>{children}</TabList>
      <TabPanels>
        {tabContents.map((tab, index) => (
          <TabPanel key={index}>{tab?.content}</TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};
