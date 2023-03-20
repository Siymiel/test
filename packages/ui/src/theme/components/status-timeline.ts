import { ComponentMultiStyleConfig } from '@chakra-ui/react';

const StatusTimeline: ComponentMultiStyleConfig = {
  parts: ['wrapper'],
  baseStyle: {
    wrapper: {
      position: 'relative',
      p: 4,
      justifyContent: 'space-between',
      _after: {
        content: '""',
        position: 'absolute',
        left: 5,
        right: 5,
        top: '3.95rem',
        borderBottom: '1px dashed',
        borderColor: 'gray.gray',
        zIndex: -1,
      },
    },
    statusItem: {
      alignItems: 'flex-start',
      _last: { alignItems: 'flex-end' },
    },
  },
  sizes: {},
  variants: {},
  defaultProps: {},
};

export default StatusTimeline;
