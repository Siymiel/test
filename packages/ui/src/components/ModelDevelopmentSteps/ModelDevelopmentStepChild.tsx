import { Box, Button, Flex } from '@chakra-ui/react';
import { format, parseISO } from 'date-fns';

import { Maybe } from '../../types';
import { Icon } from '../Icon';
import { Tag } from '../Tag';
import { StepChildProps, MODEL_DEVELOPMENT_STEP_STATUSES } from './types';

const formatDate: (date: Maybe<string>) => string = (date: Maybe<string>) =>
  date ? format(parseISO(date), "PP 'at' p") : '';

export default function ModelDevelopmentStepContent({
  title,
  nextStep,
  buildStep,
}: StepChildProps) {
  const { status, updatedOn } = buildStep ?? {
    status: MODEL_DEVELOPMENT_STEP_STATUSES.TODO,
  };

  return (
    <Flex
      pl={16}
      pr={4}
      py={4}
      fontSize="16"
      lineHeight="8"
      fontWeight="700"
      borderTopWidth="thin"
      borderTopColor="grays.border"
      opacity={status === MODEL_DEVELOPMENT_STEP_STATUSES.PENDING ? '0.5' : '1'}
    >
      <Box as="div" w="full">
        {status !== MODEL_DEVELOPMENT_STEP_STATUSES.COMPLETE && (
          <Tag
            text={status?.toUpperCase()}
            bgColor={
              status === MODEL_DEVELOPMENT_STEP_STATUSES.TODO
                ? 'pastels.marianBlue'
                : null
            }
            textColor={
              status === MODEL_DEVELOPMENT_STEP_STATUSES.TODO
                ? 'primary.blue'
                : null
            }
          />
        )}
        <Box
          mt={status === MODEL_DEVELOPMENT_STEP_STATUSES.COMPLETE ? '' : '1.5'}
        >
          {title}
        </Box>
        <Box
          as="div"
          mt="1"
          fontSize="12"
          fontWeight="400"
          lineHeight="5"
          fontFamily="Helvetica Neue"
          textColor="gray"
        >
          {formatDate(updatedOn)}
        </Box>
      </Box>
      <Box as="span" m="auto">
        {status === MODEL_DEVELOPMENT_STEP_STATUSES.COMPLETE ? (
          <Box
            h={5}
            w={5}
            borderColor="secondary.green"
            borderWidth="2px"
            borderRadius="1000px"
            p="1px"
          >
            <Icon name="check" color="#2FBA78" height="14px" width="14px" />
          </Box>
        ) : (
          <Button>{nextStep}</Button>
        )}
      </Box>
    </Flex>
  );
}
