import { ComponentMultiStyleConfig } from '@chakra-ui/react';
import CardBaseStyles from './card';

const registrationCard: ComponentMultiStyleConfig = {
  parts: ['card', 'illustration'],
  baseStyle: {
    card: {
      ...CardBaseStyles.baseStyle,
      minH: '19rem',
    },
    illustration: {
      w: '20',
      h: '20',
      borderRadius: 'full',
      bg: 'pastels.coconut',
      alignItems: 'center',
      justifyContent: 'center',
      mb: '4',
    },
  },
};

export default registrationCard;
