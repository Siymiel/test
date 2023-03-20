import { Box } from '@chakra-ui/react';
import { ContentProps } from './types';

export default function Content({ children }: ContentProps) {
  return (
    <Box px="16" py="10" w="full">
      {children}
    </Box>
  );
}
