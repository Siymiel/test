import type { ComponentMultiStyleConfig } from '@chakra-ui/theme';

export const INPUT_SHARED_SIZE = {
  borderRadius: '3px',
  px: 4,
  py: 2,
};

const Input: ComponentMultiStyleConfig = {
  parts: ['field'],
  sizes: {
    xl: {
      field: {
        h: '14',
        ...INPUT_SHARED_SIZE,
      },
    },
    sm: {
      field: {
        px: 2,
      },
    },
  },
  variants: {
    outline: {
      field: {
        borderColor: 'gray.border',
        bg: 'gray.white',
        _disabled: {
          bg: 'gray.bg',
          borderColor: 'gray.bg',
          color: 'gray.gray',
          opacity: 1,
          cursor: 'not-allowed',
        },
        _hover: {
          borderColor: 'gray.gray',
        },
        focus: {
          borderColor: 'primary.blue',
        },
      },
    },
  },
  defaultProps: {
    size: 'xl',
  },
};

export default Input;
