import { ComponentMultiStyleConfig } from '@chakra-ui/theme';

const Popover: ComponentMultiStyleConfig = {
  parts: ['content', 'header', 'body', 'arrow', 'footer'],
  baseStyle: {
    content: {
      borderColor: 'gray.border',
      _focus: {
        boxShadow: '0px 4px 12px rgba(17, 51, 83, 0.08)',
      },
    },
    header: {
      borderColor: 'gray.border',
      color: 'black',
      fontSize: '1.375rem',
      fontWeight: '700',
      px: '6',
      pt: '6',
      pb: '4',
    },
    body: {
      fontSize: '0.875rem',
      px: '6',
      py: '4',
    },
  },
  variants: {
    notification: {
      content: {
        w: '26rem',
      },
    },
    comment: {
      content: {
        bg: 'gray.dark',
        color: 'white',
      },
      header: {
        color: 'white',
        fontSize: '18px',
        border: 'none',
      },
      body: {
        fontSize: '14px',
        fontWeight: '400',
      },
      footer: {
        color: 'white',
        border: 'none',
        px: '4',
      },
    },
  },
};

export default Popover;
