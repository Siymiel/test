import type { ComponentStyleConfig } from '@chakra-ui/theme';
import { INPUT_SHARED_SIZE } from './input';

const Textarea: ComponentStyleConfig = {
  // The default size and variant values
  sizes: {
    xl: { ...INPUT_SHARED_SIZE, resize: 'none', h: '9rem' },
  },
  variants: {
    outline: {
      _hover: {
        borderColor: 'gray.gray',
      },
    },
  },
  defaultProps: {
    size: 'xl',
    variant: 'outline',
  },
};

export default Textarea;
