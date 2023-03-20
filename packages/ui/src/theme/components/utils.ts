import { ComponentMultiStyleConfig } from '@chakra-ui/react';

export const SR_ONLY_STYLES = {
  border: 0,
  clip: 'react(1px, 1px, 1px,1px)',
  h: '1px',
  w: '1px',
  m: '-1px',
  overflow: 'hidden',
  p: '0',
  position: 'absolute',
  whiteSpace: 'nowrap',
};

const Utils: ComponentMultiStyleConfig = {
  parts: ['circleCheck', 'srOnly'],
  baseStyle: {
    circleCheck: {
      w: '1rem',
      h: '1rem',
      bg: 'secondary.darkGreen',
      color: 'gray.white',
    },
    srOnly: SR_ONLY_STYLES,
  },
};

export default Utils;
