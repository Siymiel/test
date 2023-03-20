import { ComponentMultiStyleConfig } from '@chakra-ui/react';

const ConfirmationDialog: ComponentMultiStyleConfig = {
  parts: ['dialogContainer', 'closeButton'],
  baseStyle: {
    dialogContainer: {
      boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.12)',
      borderRadius: '0',
    },
    closeButton: {
      borderRadius: 'full',
      outline: 'none',
      bg: 'gray.bg',
      top: '1.5rem',
      right: '1.5rem',
      _focus: {
        bg: 'pastels.marianBlue',
        color: 'primary.blue',
      },
    },
  },
};

export default ConfirmationDialog;
