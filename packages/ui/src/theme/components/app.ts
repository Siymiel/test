import { ComponentMultiStyleConfig } from '@chakra-ui/react';

const App: ComponentMultiStyleConfig = {
  parts: ['mainContent'],
  baseStyle: {
    mainContent: {
      w: 'calc( 100% - var(--chakra-sizes-sideBar))',
      bg: 'gray.white',
      flexDir: 'column',
      '@media print': {
        w: '100%',
      },
    },
  },
};

export default App;
