import { TagProps } from './types';
import { Box } from '@chakra-ui/react';

export default function Tag({ text, textColor, bgColor }: TagProps) {
  return (
    <Box
      py="1"
      px="1.5"
      w="min-content"
      bgColor={bgColor || 'pastels.marianBlue'}
      fontSize="12"
      lineHeight="5"
      textColor={textColor || '#1D4F91'}
      whiteSpace="nowrap"
      data-testid="status-tag"
    >
      {text}
    </Box>
  );
}
