import { ModelDevelopmentStepFilters } from '../../../../components/ModelDevelopmentSteps/types';
import { Maybe } from '../../../../types';
import { BuildStep } from '../queries/build';

export interface StepWrapperProps {
  status: Maybe<BuildStep>;
  currentFilter: ModelDevelopmentStepFilters;
}
