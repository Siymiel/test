import type { ComponentStyleConfig } from '@chakra-ui/theme';

const Card: ComponentStyleConfig = {
  baseStyle: {
    flexDir: 'column',
    p: '4',
    border: '1px',
    borderColor: 'gray.border',
    alignItems: 'strech',
    position: 'relative',
    h: '100%',
    borderRadius: '6px',
  },
  variants: {
    dataCard: {
      display: 'inline-flex',
      padding: '6',
      h: '100%',
      w: '100%',
      alignItems: 'start',
      spacing: '0',
      bgColor: 'pastels.coconut',
    },
    borderedBlock: {
      p: 0,
      h: 'auto',
      bgColor: 'white',
      borderColor: 'gray.light',
    },
    clientCard: {
      display: 'flex',
      padding: '6',
      h: '100%',
      w: '100%',
      alignItems: 'center',
      spacing: '0',
      mt: '5',
      flexDir: 'row',
      justifyContent: 'space-between',
    },
  },
};

export default Card;
