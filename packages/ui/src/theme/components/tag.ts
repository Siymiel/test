import { ComponentMultiStyleConfig } from '@chakra-ui/react';

const tag: ComponentMultiStyleConfig = {
  parts: ['container'],
  baseStyle: {
    container: {
      textTransform: 'capitalize',
      fontWeight: '400',
    },
  },
  variants: {
    subtle: {
      container: {
        backgroundColor: 'pastels.marianBlue',
        color: 'primary.blue',
      },
    },
    success: {
      container: {
        bgColor: 'pastels.aquaHaze',
        color: 'secondary.darkGreen',
      },
    },
    failure: {
      container: {
        bgColor: 'pastels.paleCherry',
        color: 'secondary.red',
      },
    },
    progress: {
      container: {
        bgColor: 'gray.light',
        color: 'gray.gray',
      },
    },
    removedText: {
      container: {
        color: 'gray.gray',
        bgColor: 'pastels.paleCherry',
        textDecoration: 'line-through',
        borderRadius: 'none',
        fontSize: '1rem',
        fontWeight: '400',
        textTransform: 'none',
        minW: '0',
      },
    },
    addedText: {
      container: {
        color: 'gray.gray',
        bgColor: 'pastels.aquaHaze',
        borderRadius: 'none',
        fontSize: '1rem',
        fontWeight: '400',
        textTransform: 'none',
        minW: '0',
      },
    },
    mutedText: {
      container: {
        color: 'gray.gray',
        borderRadius: 'none',
        fontSize: '1rem',
        fontWeight: '400',
        textTransform: 'none',
        minW: '0',
      },
    },
    removedTextCapitalize: {
      container: {
        color: 'gray.gray',
        bgColor: 'pastels.paleCherry',
        textDecoration: 'line-through',
        borderRadius: 'none',
        fontSize: '1rem',
        fontWeight: '400',
        textTransform: 'capitalize',
        minW: '0',
      },
    },
    addedTextCapitalize: {
      container: {
        color: 'gray.gray',
        bgColor: 'pastels.aquaHaze',
        borderRadius: 'none',
        fontSize: '1rem',
        fontWeight: '400',
        textTransform: 'capitalize',
        minW: '0',
      },
    },
    mutedTextCapitalize: {
      container: {
        color: 'gray.gray',
        borderRadius: 'none',
        fontSize: '1rem',
        fontWeight: '400',
        textTransform: 'capitalize',
        minW: '0',
      },
    },
    removed: {
      container: {
        color: 'gray.gray',
        bgColor: 'pastels.paleCherry',
        textDecoration: 'line-through',
      },
    },
    added: {
      container: {
        color: 'secondary.darkGreen',
        bgColor: 'pastels.aquaHaze',
      },
    },
  },
  defaultProps: {
    variant: 'subtle',
  },
};

export default tag;
