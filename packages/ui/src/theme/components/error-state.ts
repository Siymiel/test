import type { ComponentMultiStyleConfig } from '@chakra-ui/theme';

const ErrorState: ComponentMultiStyleConfig = {
  parts: ['icon'],
  baseStyle: {
    icon: {
      pos: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
    wrapper: {
      borderColor: 'gray.border',
      flexDir: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      w: '100%',
      borderRadius: '6px',
      px: '5',
    },
    iconWrapper: {
      bgColor: 'pastels.paleCherry',
      width: '2.5rem',
      height: '2.5rem',
      borderRadius: '50%',
      pos: 'relative',
      color: 'primary.magenta',
    },
  },
};

export default ErrorState;
