import { ComponentMultiStyleConfig } from '@chakra-ui/react';

const notificationCard: ComponentMultiStyleConfig = {
  parts: ['block', 'heading', 'activeIndicator', 'weightIndicator'],
  baseStyle: {
    block: {
      pt: '5',
      px: '4',
      pb: '4',
      alignItems: 'start',
      pos: 'relative',
    },
    heading: {
      pos: 'relative',
      mr: '8',
    },
    activeIndicator: {
      top: '0.5rem',
      left: '0',
      bgColor: 'primary.magenta',
    },
    weightIndicator: {
      boxSize: '8',
      borderRadius: 'full',
      alignItems: 'center',
      justifyContent: 'center',
      pos: 'absolute',
      right: '4',
      top: '2',
    },
  },
  variants: {
    weight1: {
      weightIndicator: {
        bgColor: 'pastels.paleCherry',
        color: 'primary.raspberry',
      },
    },
    weight2: {
      weightIndicator: {
        bgColor: 'pastels.aquaHaze',
        color: 'secondary.darkGreen',
      },
    },
    weight3: {
      weightIndicator: {
        bgColor: 'pastels.marianBlue',
        color: 'secondary.saphire',
      },
    },
  },
  // The default `size` or `variant` values
  defaultProps: {},
};

export default notificationCard;
