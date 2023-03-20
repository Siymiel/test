import { ComponentMultiStyleConfig } from '@chakra-ui/react';
import Link from './link';

const InputFileUploader: ComponentMultiStyleConfig = {
  parts: [
    'inputContainer',
    'addFileButton',
    'fileContainer',
    'removeFileButton',
  ],
  baseStyle: {
    inputContainer: {
      flexDir: 'column',
      alignItems: 'center',
      border: '1px',
      borderStyle: 'dashed',
      borderColor: 'primary.blue',
      py: '6',
      borderRadius: '4px',
    },
    addFileButton: {
      mb: '3',
    },
    removeFileButton: {
      ...Link.baseStyle,
      bgColor: 'transparent',
      _hover: {
        bg: 'transparent',
        boxShadow: 'none',
      },
      h: 'auto',
      p: '0',
      mt: '2',
      textDecor: 'underline',
      fontWeight: '400',
    },
    fileContainer: {
      border: '1px',
      borderColor: 'gray.border',
      w: '100%',
      padding: '4',
      borderRadius: '4px',
    },
    formHelperText: {
      color: 'gray.gray',
      fontSize: '0.875rem',
    },
  },
  variants: {
    error: {
      inputContainer: {
        borderColor: 'secondary.red',
      },
    },
  },
  defaultProps: {},
};

export default InputFileUploader;
