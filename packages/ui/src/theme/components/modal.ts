import { ComponentMultiStyleConfig } from '@chakra-ui/react';

const Modal: ComponentMultiStyleConfig = {
  parts: [
    'overlay',
    'dialogContainer',
    'dialog',
    'header',
    'closeButton',
    'body',
    'footer',
    'progressBar',
  ],
  baseStyle: {
    overlay: {
      bg: 'rgba(18,48 ,88, 0.4)',
    },
    header: {
      px: 6,
      pt: 6,
      pb: 7,
      borderBottom: '1px solid',
      borderColor: 'gray.light',
    },
    closeButton: {
      top: 6,
      right: 6,
    },
    body: {
      p: 6,
    },
    footer: {
      p: 6,
      borderTop: '1px solid',
      borderColor: 'gray.light',
    },
    progressBar: {
      position: 'absolute',
      top: '50%',
      p: '1rem',
      transform: 'translate(0%, -50%)',
    },
  },
  variants: {
    fileUploadDialog: {
      body: {
        maxH: '70vh',
        overflow: 'auto',
      },
    },
  },
  sizes: {
    xl: {
      dialog: {
        maxW: '929px',
      },
    },
  },
};

export default Modal;
