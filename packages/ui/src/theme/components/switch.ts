import type { ComponentMultiStyleConfig } from '@chakra-ui/theme';

const Switch: ComponentMultiStyleConfig = {
  parts: ['track', 'container'],
  baseStyle: {
    track: {
      bg: 'gray.border',
      _checked: {
        bg: 'primary.raspberry',
        _hover: {
          bg: 'primary.magenta',
        },
        _disabled: {
          opacity: '0.4',
        },
      },
      _hover: {
        bg: 'gray.gray',
      },
      _focus: {
        boxShadow: ' 0px 0px 8px 0px #AF168580',
      },
    },
  },
  variants: {},
  sizes: {
    lg: {
      container: {
        width: '3.25rem',
        height: '2rem',
      },
    },
  },
};

export default Switch;
