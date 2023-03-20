import { ComponentMultiStyleConfig } from '@chakra-ui/react';
import Card from './card';

const ApplicationCard: ComponentMultiStyleConfig = {
  parts: ['cardContainer', 'iconContainer', 'description', 'icon'],
  baseStyle: {
    cardContainer: {
      ...Card.baseStyle,
    },
    iconContainer: {
      mb: '4',
      pos: 'relative',
      bgColor: 'pastels.coconut',
      h: '5rem',
      w: '5rem',
      borderRadius: 'full',
    },
    icon: {
      pos: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
    description: {
      maxW: '18.5rem',
      mt: '1',
    },
    kebab: {
      pos: 'relative',
      width: '2rem',
      height: '2rem',
      borderRadius: '50%',
      _hover: {
        bgColor: 'pastels.marianBlue',
      },
    },
    kebabIcon: {
      pos: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
    },
    launchLink: {
      mt: 'auto',
      display: 'flex',
      alignItems: 'center',
    },
  },
  variants: {},
  defaultProps: {},
};

export default ApplicationCard;
