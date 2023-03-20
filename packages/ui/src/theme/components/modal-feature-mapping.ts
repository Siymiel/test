import type { ComponentMultiStyleConfig } from '@chakra-ui/theme';

const ModalFeatureMapping: ComponentMultiStyleConfig = {
  parts: ['closeButton'],
  baseStyle: {
    closeButton: {
      height: '8',
      width: '8',
      borderRadius: '50%',
      bgColor: 'gray.bg',
    },
  },
};

export default ModalFeatureMapping;
