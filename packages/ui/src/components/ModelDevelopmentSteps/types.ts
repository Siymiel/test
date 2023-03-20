import { ReactElement } from 'react';
import { BuildStepChild } from '../../pages/Acquire/Essentials/queries/build';
import { Maybe } from '../../types';

export const MODEL_DEVELOPMENT_STEP_STATUSES = {
  IN_PROGRESS: 'In Progress',
  COMPLETE: 'Complete',
  TODO: 'To Do',
  PENDING: 'Pending',
} as const;

export type ModelDevelopmentStepStatuses =
  (typeof MODEL_DEVELOPMENT_STEP_STATUSES)[keyof typeof MODEL_DEVELOPMENT_STEP_STATUSES];

export interface HeaderProps {
  itemName?: string;
  isExpanded?: boolean;
  status?: string;
  index?: number;
}

export interface StepChildProps {
  title: string;
  buildStep: Maybe<BuildStepChild>;
  nextStep?: string;
}

export interface ModelDevelopmentStepProps {
  title: string;
  status: Maybe<ModelDevelopmentStepStatuses>;
  children: Array<ReactElement<StepChildProps>> | ReactElement<StepChildProps>;
  index?: number;
}

export const MODEL_DEVELOPMENT_STEPS_FILTERS = {
  ALL: 'all',
  TODO: 'todo',
};

export type ModelDevelopmentStepFilters =
  (typeof MODEL_DEVELOPMENT_STEPS_FILTERS)[keyof typeof MODEL_DEVELOPMENT_STEPS_FILTERS];

export interface ModelDevelopmentFilterProps {
  currentFilter: ModelDevelopmentStepFilters;
  setCurrentFilter: (filter: ModelDevelopmentStepFilters) => void;
}
