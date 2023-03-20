import { ComponentMultiStyleConfig } from '@chakra-ui/react';

const SideBar: ComponentMultiStyleConfig = {
  parts: ['title', 'navItem', 'sidebarContainer', 'activeLink'],
  baseStyle: {
    sidebarContainer: {
      position: 'sticky',
      top: 0,
      color: 'gray.dark',
      h: '100vh',
      w: 'sideBar',
      bg: 'pastels.coconut',
      '@media print': {
        display: 'none',
      },
    },
    navItem: {
      px: '8',
      py: '6',
      display: 'flex',
      borderLeft: '4px',
      borderLeftColor: 'transparent',
      color: 'gray.dark',
      _hover: {
        bg: 'pastels.marianBlue50',
        borderLeftColor: 'primary.magenta',
        opacity: '50%',
        textDecoration: 'none',
      },
      _focus: {
        outline: 'none',
      },
    },
    activeLink: {
      bg: 'pastels.marianBlue',
      borderLeftColor: 'primary.magenta',
      outline: 'none',
    },
    tag: {
      bg: 'primary.raspberry',
      borderRadius: '50%',
    },
  },
  variants: {},
  defaultProps: {},
};

export default SideBar;
