import type { ComponentMultiStyleConfig } from '@chakra-ui/theme';

export const Menu: ComponentMultiStyleConfig = {
  parts: ['avatarWrapper', 'iconWrapper', 'list', 'divider', 'item'],
  variants: {
    viewProfile: {
      list: {
        w: '19.5rem',
        pt: '0',
        overflow: 'hidden',
        borderColor: 'gray.border',
      },
      item: {
        p: '4',
        color: 'gray.dark',
        _hover: {
          textDecoration: 'none',
        },
      },
      divider: {
        pl: '2',
        m: '0',
        ml: '14',
        borderColor: 'gray.light',
      },
    },
  },
  baseStyle: {
    avatarWrapper: {
      w: '10',
      h: '10',
    },
    iconWrapper: {
      w: '10',
    },
    item: {
      fontWeight: '400',
      color: 'gray.dark',
      _hover: {
        textDecoration: 'none',
      },
    },
  },
};

export default Menu;
