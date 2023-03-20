import type { ComponentStyleConfig } from '@chakra-ui/theme';

const Text: ComponentStyleConfig = {
  baseStyle: {
    textStyle: 'regular',
  },
  sizes: {},
  variants: {
    default: {
      color: 'gray.dark',
    },
    muted: {
      color: 'gray.gray',
    },
    error: {
      color: 'secondary.red',
    },
    success: {
      color: 'secondary.darkGreen',
    },
    mutedCapitalize: {
      color: 'gray.gray',
      textTransform: 'capitalize',
    },
    bright: {
      color: 'white',
    },
  },
  defaultProps: {
    variant: 'default',
  },
};

export default Text;
