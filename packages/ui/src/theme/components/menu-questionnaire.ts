import { ComponentMultiStyleConfig } from '@chakra-ui/react';

const MenuQuestionnaire: ComponentMultiStyleConfig = {
  parts: [
    'menuitem',
    'menuNavItem',
    'menuContainer',
    'menuActiveLink',
    'nextButton',
  ],
  baseStyle: {
    menuContainer: {
      position: 'sticky',
      top: 0,
      color: 'gray.dark',
      h: '100vh',
      w: 'menu',
      '@media print': {
        display: 'none',
      },
    },
    menuitem: {
      fontWeight: 'bold',
      color: 'gray.dark',
      _focus: {
        outline: 'none',
      },
    },
    menuNavItem: {
      px: '4',
      py: '4',
      fontWeight: 'bold',
      display: 'list-item',
      listStylePosition: 'inside',
      borderColor: 'gray.light',
      border: '1.34px ridge',
      borderBottom: 'none',
      cursor: 'pointer',
      _hover: {
        borderLeft: '4px',
        borderLeftColor: 'primary.magenta',
        textDecoration: 'none',
      },
      _first: {
        borderTopLeftRadius: '5px',
        borderTopRightRadius: '5px',
      },
      _last: {
        borderLeft: '1.34px ridge',
        borderBottom: '1.34px ridge',
        borderLeftColor: 'none',
        borderBottomLeftRadius: '5px',
        borderBottomRightRadius: '5px',
      },
      _focus: {
        outline: 'none',
      },
    },
    menuActiveLink: {
      px: '4',
      py: '4',
      fontWeight: 'bold',
      listStylePosition: 'inside',
      display: 'list-item',
      borderLeft: '4px',
      borderTop: '1.34px ridge',
      borderRight: '1.34px ridge',
      borderLeftColor: 'primary.magenta',
      textDecoration: 'none',
      outline: 'none',
    },
    iconAlign: {
      marginTop: '-25px',
      float: 'right',
    },
    nextButton: {
      marginTop: '-19px',
    },
  },

  variants: {},
  defaultProps: {},
};

export default MenuQuestionnaire;
