import type { ComponentMultiStyleConfig } from '@chakra-ui/theme';

const Checkbox: ComponentMultiStyleConfig = {
  parts: ['control', 'icon', 'container', 'label'],
  baseStyle: {
    control: {
      borderRadius: '0.125rem',
      borderColor: 'gray.dark',
      borderWidth: '3px',
      '&:after': {
        content: '""',
        w: '2.5rem',
        h: '2.5rem',
        bg: 'rgba(255, 255, 255, 0)',
        transition: 'background-color 0.2s ease-in-out',
        position: 'absolute',
        borderRadius: '50%',
        zIndex: '-1',
      },
      _checked: {
        bg: 'primary.raspberry',
        borderColor: 'primary.raspberry',
        borderWidth: 0,

        _hover: {
          bg: 'primary.raspberry',
          borderColor: 'primary.raspberry',
        },
      },
      _focus: {
        boxShadow: 'none',
        borderColor: 'primary.raspberry',
        '&:after': {
          bg: 'pastels.paleCherry',
        },
      },
      _indeterminate: {
        bg: 'transparent',
      },
    },
    container: {
      transition: 'background-color 0.2s ease-in-out',
      bg: 'rgba(255, 255, 255, 0)',
      borderRadius: '50%',
      justifyContent: 'center',
      _hover: {
        bg: 'gray.bg',
      },
    },
  },
  sizes: {
    lg: {
      control: {
        w: '1.125rem',
        h: '1.125rem',
      },
      container: {
        w: '2.5rem',
        h: '2.5rem',
      },
    },
  },
  defaultProps: {
    variant: 'primary',
    size: 'lg',
  },
};

export default Checkbox;
