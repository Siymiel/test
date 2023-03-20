import { ComponentMultiStyleConfig } from '@chakra-ui/react';

const Tabs: ComponentMultiStyleConfig = {
  parts: ['root', 'tablist', 'tab', 'tabPanel', 'shadow'],
  baseStyle: {
    tab: {
      textStyle: 'ctaRegular',
    },
  },
  sizes: {},
  variants: {
    line: {
      tablist: {
        borderColor: 'pastels.marianBlue',
        borderBottomWidth: '1px',
        borderTopWidth: '1px',
      },
      tab: {
        px: 2,
        py: 3,
        mx: 4,
        color: 'gray.gray',
        _first: {
          ml: 2,
        },
        _selected: {
          color: 'primary.blue',
          fontWeight: 'semibold',
          outline: 'none',
        },
        _hover: {
          color: 'primary.lightBlue',
          textDecoration: 'none',
        },
        _focus: {
          outline: 'none',
        },
      },
    },
    smallTab: {
      tablist: {
        borderColor: 'pastels.marianBlue',
        borderBottomWidth: '1px',
      },
      tab: {
        py: 5,
        color: 'gray.gray',
        _first: {
          ml: 0,
        },
        _selected: {
          color: 'primary.midnightBlue',
          bg: 'pastels.marianBlue',
          borderRadius: '6px 6px 0px 0px',
        },
        _hover: {
          color: 'primary.midnightBlue',
        },
        _focus: {
          boxShadow: '0px 0px 8px rgba(175, 22, 133, 0.5)',
        },
      },
    },
  },
};

export default Tabs;
