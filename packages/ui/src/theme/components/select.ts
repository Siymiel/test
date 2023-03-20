import type { ComponentMultiStyleConfig } from '@chakra-ui/theme';
import Input from './input';

const colorVariantProperties = {
  border: '1px solid #DDDDDD',
  '> option': {
    color: 'gray.dark',
  },
};

const Select: ComponentMultiStyleConfig = {
  parts: ['field', 'container'],
  sizes: Input.sizes,
  variants: {
    outline: {
      field: {
        borderColor: 'gray.border',
        bg: 'gray.white',
        _hover: {
          borderColor: 'gray.gray',
        },
        focus: {
          borderColor: 'primary.blue',
        },
      },
    },
    unstyled: {
      field: {
        fontWeight: '500',
        color: 'primary.raspberry',
      },
      icon: {
        pos: 'relative',
        marginTop: '0.625rem',
      },
    },
    darkGreenSelected: {
      field: {
        color: 'secondary.darkGreen',
        ...colorVariantProperties,
      },
    },
    secondaryRedSelected: {
      field: {
        color: 'secondary.red',
        ...colorVariantProperties,
      },
    },
  },
  defaultProps: {
    size: 'xl',
  },
  baseStyle: {
    field: {
      textTransform: 'capitalize',
    },
  },
};

export default Select;
