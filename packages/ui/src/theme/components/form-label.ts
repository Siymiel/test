import type { ComponentStyleConfig } from '@chakra-ui/theme';
import { SR_ONLY_STYLES } from './utils';

const FormLabel: ComponentStyleConfig = {
  baseStyle: {
    fontSize: '0.875rem',
    lineHeight: '1.42',
    fontWeight: '700',
  },
  variants: {
    srOnly: SR_ONLY_STYLES,
  },
};

export default FormLabel;
