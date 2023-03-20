import type { ComponentMultiStyleConfig } from '@chakra-ui/theme';

const Alert: ComponentMultiStyleConfig = {
  parts: ['container', 'title', 'description', 'icon'],
  baseStyle: {
    container: {
      px: 6,
      py: 4,
      borderRadius: 'base',
    },
    description: {
      marginLeft: 6,
      textStyle: 'small',
    },
  },
  variants: {
    error: {
      container: {
        bg: 'pastels.paleCherry',
      },
    },
    info: {
      container: {
        bg: 'pastels.marianBlue',
      },
    },
    gray: {
      container: {
        bg: 'gray.bg',
      },
    },
    infoAqua: {
      container: {
        bg: 'pastels.aquaHaze',
        px: 4,
        borderRadius: '0.375rem',
      },
      description: {
        marginLeft: 0,
        textStyle: 'regular',
      },
    },
    warning: {
      container: {
        bg: 'pastels.yellow',
      },
    },
  },
};

export default Alert;
