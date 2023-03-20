import { ComponentMultiStyleConfig } from '@chakra-ui/react';

export const activeCount = {
  color: 'gray.white',
  fontSize: '8px',
  fontWeight: 700,
  borderRadius: 'full',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  top: '0.5rem',
  left: '1.25rem',
  pos: 'absolute',
  boxSize: '17px',
  bgColor: 'primary.raspberry',
  lineHeight: '1.17',
};

const SearchFilterBar: ComponentMultiStyleConfig = {
  parts: ['activeCount', 'viewButtons'],

  baseStyle: {
    activeCount: {
      ...activeCount,
    },
    viewButtons: {
      border: '1px',
      borderColor: 'gray.border',
      borderRadius: '3px',
    },
  },
};

export default SearchFilterBar;
