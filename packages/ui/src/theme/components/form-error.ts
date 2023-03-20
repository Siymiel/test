import type { ComponentStyleConfig } from '@chakra-ui/theme';

const FormError: ComponentStyleConfig = {
  parts: ['text'],
  baseStyle: {
    text: {
      textStyle: 'small',
      lineHeight: '1.42',
      marginTop: '1.5',
      color: 'secondary.red',
    },
  },
};

export default FormError;
