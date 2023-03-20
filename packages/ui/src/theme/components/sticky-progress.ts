import { ComponentMultiStyleConfig } from '@chakra-ui/react';
import CardBaseStyles from './card';

const stickyProgress: ComponentMultiStyleConfig = {
  parts: [
    'block',
    'stepRow',
    'iconIndicator',
    'activeIndicator',
    'blockFooter',
  ],
  baseStyle: {
    block: {
      ...CardBaseStyles.baseStyle,
      p: 0,
      h: 'auto',
      position: 'sticky',
      top: '12',
      maxW: '20rem',
      minW: { base: '17rem', lg: '20rem' },
    },
    stepRow: {
      paddingLeft: '5',
      py: '4',
      _notLast: {
        borderBottom: '1px solid',
        borderBottomColor: 'gray.border',
      },
      pos: 'relative',
    },
    activeIndicator: {
      position: 'absolute',
      top: '0',
      bottom: '0',
      left: '0',
      bgColor: 'primary.magenta',
      w: '3px',
    },
    iconIndicator: {
      position: 'absolute',
      right: '4',
      top: '50%',
      transform: 'translateY(-50%)',
    },
    blockFooter: {
      alignItems: 'strech',
      p: 4,
    },
  },
  sizes: {},
  variants: {},
  defaultProps: {},
};

export default stickyProgress;
