import { ComponentStyleConfig } from '@chakra-ui/react';

const LanguageSelector: ComponentStyleConfig = {
  baseStyle: {
    flexDir: 'row',
    width: '20%',
    height: '50px',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 4,
    paddingBottom: 2,
    gap: 2,
    cursor: 'pointer',
    fontSize: '12px',
    borderRadius: 6,
    _hover: {
      bgColor: 'gray.light',
      borderRadius: 6,
    },
  },
};

export default LanguageSelector;
