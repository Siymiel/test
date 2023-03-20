import { Accordion, Box } from '@chakra-ui/react';
import { useState } from 'react';
import { ModelDevelopmentFilters } from './ModelDevelopmentFilters';
import {
  ModelDevelopmentStepFilters,
  MODEL_DEVELOPMENT_STEPS_FILTERS,
} from './types';

export default function ModelDevelopmentSteps({
  children,
}: {
  children: (currentFilter: ModelDevelopmentStepFilters) => JSX.Element;
}) {
  const [currentFilter, setCurrentFilter] =
    useState<ModelDevelopmentStepFilters>(MODEL_DEVELOPMENT_STEPS_FILTERS.ALL);

  return (
    <>
      <ModelDevelopmentFilters
        currentFilter={currentFilter}
        setCurrentFilter={setCurrentFilter}
      />
      <Box borderWidth="thin" borderColor="gray.border" borderRadius="6">
        <Accordion allowToggle defaultIndex={0}>
          {children(currentFilter)}
        </Accordion>
      </Box>
    </>
  );
}
