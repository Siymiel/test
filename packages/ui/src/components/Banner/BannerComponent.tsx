import { Box, Flex, Heading, Spacer, Text } from '@chakra-ui/react';
import { Separator } from '../Separator';
import { Icon } from '../Icon';
import { BannerProps } from './types';

export default function Banner({
  projectName,
  buildName,
  status,
  organization,
  solution,
}: BannerProps) {
  return (
    <Flex w="full" h="32" p="5">
      <Box boxShadow="sm" ml="14">
        <Heading size="lg" mb="3">
          {projectName} - {buildName}
        </Heading>
        <Heading size="xs" color="gray" display="flex">
          <Icon name="circle" />
          <Text ml="1" color="gray" fontSize="xs" textTransform="uppercase">
            {status}
          </Text>
        </Heading>
      </Box>
      <Spacer />
      <Box>
        <Heading size="xs" color="gray" pb="2">
          Organization
        </Heading>
        <Heading size="sm">{organization}</Heading>
      </Box>
      <Separator />
      <Box mr="10">
        <Heading size="xs" color="gray" pb="2">
          Solution
        </Heading>
        <Heading size="sm">{solution}</Heading>
      </Box>
    </Flex>
  );
}
