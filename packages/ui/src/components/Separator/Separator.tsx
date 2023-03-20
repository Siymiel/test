import { SeparatorProps } from './types';
import { Box } from '@chakra-ui/react';

export default function Separator({ px, height, color }: SeparatorProps) {
  return (
    <Box
      mx={px || 4}
      h={height || 10}
      borderWidth="thin"
      borderColor={color || 'gray-light'}
    />
  );
}
