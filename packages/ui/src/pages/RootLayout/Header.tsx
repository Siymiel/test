import { Box, Flex, Heading } from '@chakra-ui/react';
import { Separator } from '../../components/Separator';
import { Icon } from '../../components/Icon';

export default function Header() {
  return (
    <Flex
      as="header"
      h="16"
      bgColor="gray.white"
      px="16"
      py="5"
      borderBottomColor="pastels.marianBlue"
      borderBottomWidth="thin"
      alignItems="center"
    >
      <Box>
        <Icon name="experian" />
      </Box>
      <Separator />
      <Box>
        <Heading size={'md'} fontWeight={'400'}>
          Ascend Intelligence Services
        </Heading>
      </Box>
    </Flex>
  );
}
