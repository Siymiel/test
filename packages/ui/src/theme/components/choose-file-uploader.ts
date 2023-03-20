import { ComponentMultiStyleConfig } from '@chakra-ui/react';
import InputFileUploader from './input-file-uploader';

const ChooseFileUploader: ComponentMultiStyleConfig = {
  parts: [
    'fileContainer',
    'addFileButton',
    'fileContainer',
    'removeFileButton',
  ],
  baseStyle: {
    ...InputFileUploader.baseStyle,
    addFileButton: {
      m: '0',
    },
  },
  variants: {
    ...InputFileUploader.variants,
  },
};

export default ChooseFileUploader;
