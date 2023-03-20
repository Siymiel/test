import { Box, Button } from '@chakra-ui/react';
import {
  ModelDevelopmentFilterProps,
  ModelDevelopmentStepFilters,
  MODEL_DEVELOPMENT_STEPS_FILTERS,
} from './types';

export function ModelDevelopmentFilters({
  currentFilter,
  setCurrentFilter,
}: ModelDevelopmentFilterProps) {
  return (
    <Box mb={8}>
      <Filter
        currentFilter={currentFilter}
        setCurrentFilter={setCurrentFilter}
        title="All"
        status={MODEL_DEVELOPMENT_STEPS_FILTERS.ALL}
      />
      <Filter
        currentFilter={currentFilter}
        setCurrentFilter={setCurrentFilter}
        title="Todo"
        status={MODEL_DEVELOPMENT_STEPS_FILTERS.TODO}
      />
    </Box>
  );
}

function Filter({
  currentFilter,
  setCurrentFilter,
  title,
  status,
}: { title: string; status: ModelDevelopmentStepFilters } & Pick<
  ModelDevelopmentFilterProps,
  'currentFilter' | 'setCurrentFilter'
>) {
  return (
    <Button
      onClick={() => setCurrentFilter(status)}
      variant="roundRaspberry"
      size="md"
      textColor={currentFilter !== status ? 'gray.dark' : 'white'}
      bgColor={currentFilter !== status ? 'gray.bg' : undefined}
      mr="3.5"
    >
      {title}
    </Button>
  );
}
