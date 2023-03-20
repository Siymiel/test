import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
} from '@chakra-ui/react';
import { Separator } from '../Separator';
import { Tag } from '../Tag';
import {
  MODEL_DEVELOPMENT_STEP_STATUSES,
  ModelDevelopmentStepProps,
} from './types';

export default function ModelDevelopmentStep({
  status,
  index,
  title,
  children,
}: ModelDevelopmentStepProps) {
  return (
    <AccordionItem>
      {({ isExpanded }: { isExpanded: boolean }) => (
        <>
          <AccordionButton
            _expanded={{
              borderLeftWidth: 'medium',
              borderLeftColor: 'primary.magenta',
            }}
            py="4"
            fontSize="18"
            lineHeight="6"
            fontWeight="700"
          >
            {index !== undefined && (
              <>
                {index}
                <Separator height="8" />
              </>
            )}
            <Flex flex="1" textAlign="left" textColor="gray.dark">
              {title}
            </Flex>
            <Status status={status} />
            <ExpansionIndicator isExpanded={isExpanded} />
          </AccordionButton>
          <AccordionPanel p="0">{children}</AccordionPanel>
        </>
      )}
    </AccordionItem>
  );
}

function Status({ status }: Pick<ModelDevelopmentStepProps, 'status'>) {
  return (
    <Tag
      text={(
        status ?? MODEL_DEVELOPMENT_STEP_STATUSES.TODO
      ).toLocaleUpperCase()}
      bgColor={
        status === MODEL_DEVELOPMENT_STEP_STATUSES.COMPLETE
          ? 'pastels.aquaHaze'
          : null
      }
      textColor={
        status === MODEL_DEVELOPMENT_STEP_STATUSES.COMPLETE
          ? 'secondary.darkGreen'
          : null
      }
    />
  );
}

function ExpansionIndicator({ isExpanded }: { isExpanded: boolean }) {
  if (isExpanded) {
    return (
      <Box
        ml="4"
        display="flex"
        borderRadius="1000px"
        bgColor="pastels.paleCherry"
      >
        <AccordionIcon h="25px" w="25px" color="primary.raspberry" />
      </Box>
    );
  }

  return <AccordionIcon h="25px" w="25px" ml="4" color="primary.raspberry" />;
}
