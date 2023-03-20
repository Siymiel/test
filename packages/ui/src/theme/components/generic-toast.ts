import { ComponentMultiStyleConfig } from '@chakra-ui/react';

const GenericToast: ComponentMultiStyleConfig = {
  parts: ['container', 'icon', 'closeButton', 'heading', 'description'],
  variants: {
    success: {
      container: {
        borderTopColor: 'secondary.green',
      },
      icon: {
        color: 'secondary.green',
      },
    },
  },
  baseStyle: {
    container: {
      bg: 'gray.dark',
      borderTop: '4px solid',
      borderTopColor: 'secondary.red',
      p: '4',
      color: 'gray.white',
      pos: 'relative',
      borderBottomLeftRadius: '4px',
      borderBottomRightRadius: '4px',
    },
    icon: {
      mt: '2px',
      color: 'secondary.red',
    },
    description: {
      color: 'inherit',
      maxW: '90%',
    },
    closeButton: {
      display: 'flex',
      color: 'gray.white',
      position: 'absolute',
      right: '1',
      top: '1',
    },
    heading: {
      pr: 8,
    },
  },
};

export default GenericToast;
