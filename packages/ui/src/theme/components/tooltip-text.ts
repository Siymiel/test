import { ComponentMultiStyleConfig } from '@chakra-ui/theme';
import { cssVar } from '@chakra-ui/theme-tools';

const arrowBg = cssVar('popper-arrow-bg'); // Styles Tooltip Arrow

const TooltipText: ComponentMultiStyleConfig = {
  parts: ['tooltipContainer', 'tooltipText', 'tooltip'],
  baseStyle: {
    tooltip: {
      p: '4',
      bgColor: 'gray.dark',
      [arrowBg.variable]: '#333333', // Doesn't accept gray.dark
      border: '0',
      borderRadius: 'none',
      _focus: {
        filter: 'drop-shadow(0px 4px 16px rgba(0, 0, 0, 0.12))',
        outline: 'none',
      },
    },
    tooltipHeader: {
      p: '0',
      border: '0',
      mb: '3',
    },
    tooltipTitle: {
      color: 'gray.white',
      fontSize: '1.125rem',
    },
    tooltipText: {
      p: '0',
      fontWeight: '400',
      color: 'gray.white',
    },
    tooltipCloseButton: {
      position: 'static',
      color: 'gray.white',
      p: '0',
      ml: 'auto',
    },
    container: {
      alignItems: 'center',
      alignSelf: 'start',
      cursor: 'pointer',
      fontWeight: '400',
      bg: 'none',
      p: '0',
      h: 'unset',
      mt: '0.5rem !important', // Note: Seems to be an issue with how stack is rendered and doesn't seem to be a fix: https://github.com/chakra-ui/chakra-ui/issues/2476
      _hover: {
        bg: 'none',
        boxShadow: 'none',
      },
      _focus: {
        boxShadow: 'none',
        outline: 'revert',
      },
    },
    containerText: {
      fontSize: '14',
      mr: '1',
    },
  },
};

export default TooltipText;
