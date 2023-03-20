import { ComponentMultiStyleConfig } from '@chakra-ui/react';

const avatar: ComponentMultiStyleConfig = {
  parts: ['badge'],
  sizes: {
    sm: {
      container: {
        border: '1px',
        borderColor: 'white',
        color: 'white',
      },
      excessLabel: {
        bg: 'pastels.marianBlue',
        fontSize: '0.875rem',
        fontWeight: '400',
        color: 'gray.gray',
      },
    },
  },
  defaultProps: {
    size: 'sm',
  },
};

export default avatar;
