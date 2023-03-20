import { ComponentMultiStyleConfig } from '@chakra-ui/react';

export const FileRadioCard: ComponentMultiStyleConfig = {
  parts: ['container', 'sizeText'],
  baseStyle: {
    container: {
      w: 'full',
      justifyContent: 'space-between',
      bg: 'gray.bg',
      mb: '2',
      p: '4',
      cursor: 'pointer',
      borderRadius: 'md',
      _focus: {
        boxShadow: 'outline',
      },
      _checked: {
        bg: 'pastels.marianBlue',
        borderColor: 'primary.lightBlue',
        borderWidth: '1px',
      },
    },
    sizeText: {
      color: 'gray.gray',
    },
  },
  variants: {
    disabled: {
      container: {
        pointerEvents: 'none',
        opacity: '0.4',
      },
    },
    plainCard: {
      container: {
        pointerEvents: 'none',
      },
    },
  },
};

export default FileRadioCard;
