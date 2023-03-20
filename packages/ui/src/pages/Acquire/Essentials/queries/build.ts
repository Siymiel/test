import { createQuery } from 'react-query-kit';
import axios from 'axios';
import { Maybe } from '../../../../types';
import { ModelDevelopmentStepStatuses } from '../../../../components/ModelDevelopmentSteps';

export interface UseBuildVariables {
  buildId: Maybe<string>;
}

export interface BuildStepChild {
  status: ModelDevelopmentStepStatuses;
  updatedOn?: string;
}

export interface BuildStep {
  status: ModelDevelopmentStepStatuses;
  updatedOn?: string;
  children: Maybe<{
    [key: string]: BuildStepChild;
  }>;
}

export interface UseBuildStatusResponse {
  statuses: { [key: string]: BuildStep };
}

export const useBuildStatus = createQuery<
  UseBuildStatusResponse,
  UseBuildVariables
>({
  primaryKey: '/api/build/status',
  queryFn: async ({ queryKey: [, { buildId }] }) => {
    return (await axios.get(`/api/build/${buildId}/status`)).data;
  },
  suspense: true,
});
