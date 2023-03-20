import { Box, Flex, Spacer } from '@chakra-ui/react';
import Menu from './Menu/Menu';

export default function Questionnaire() {
  return (
    <>
      <Flex>
        <Box></Box>
        <Spacer />
        <Box>
          <Menu />
        </Box>
      </Flex>
    </>
  );
}
