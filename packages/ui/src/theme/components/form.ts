import type { ComponentMultiStyleConfig } from '@chakra-ui/theme';

const Form: ComponentMultiStyleConfig = {
  parts: ['requiredIndicator', 'helperText'],
  baseStyle: {
    requiredIndicator: {
      color: 'gray.dark',
    },
    helperText: {
      lineHeight: '1.42',
      color: 'gray.gray',
      mt: '2px',
    },
  },
};

export default Form;
