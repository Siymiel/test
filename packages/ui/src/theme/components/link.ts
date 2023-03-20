import type { ComponentStyleConfig } from '@chakra-ui/theme';

const Link: ComponentStyleConfig = {
  baseStyle: {
    fontWeight: '500',
    _hover: {
      textDecor: 'none',
    },
    _focus: {
      borderRadius: '4px',
      border: '1px',
    },
  },
  sizes: {
    sm: {
      fontSize: '0.875rem',
    },
    md: {
      fontSize: '1rem',
      lineHeight: '1.5',
    },
  },
  variants: {
    default: {
      color: 'primary.raspberry',
      _hover: {
        color: 'primary.magenta',
      },
      _focus: {
        boxShadow: '0 0 0 1px #AF1685',
        border: 'none',
      },
      _disabled: {
        opacity: 0.5,
        pointerEvents: 'none',
      },
    },
    light: {
      color: 'gray.white',
    },
    gray: {
      color: 'gray.gray',
    },
    grayCapitalize: {
      color: 'gray.gray',
      textTransform: 'capitalize',
    },
    block: {
      color: 'inherit',
      fontWeight: 'inherit',
    },
    primaryBlue: {
      color: 'primary.blue',
      _hover: {
        color: 'primary.midnightBlue',
      },
      _focus: {
        boxShadow: '0 0 0 1px #1D4F91',
        border: 'none',
      },
    },
  },
  defaultProps: {
    variant: 'default',
    size: 'sm',
  },
};

export default Link;
