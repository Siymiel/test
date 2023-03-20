import { createQuery } from 'react-query-kit';
import axios from 'axios';
import { Maybe } from '../../../../types';

interface UseQuestionnaireVariables {
  projectId: Maybe<string>;
  buildId: Maybe<string>;
}

interface EssentialsQuestionnaire {
  completed: Array<string>;
}

export interface UseQuestionnaireResponse {
  questionnaire: EssentialsQuestionnaire;
}

export const useQuestionnaire = createQuery<
  UseQuestionnaireResponse,
  UseQuestionnaireVariables
>({
  primaryKey: '/api/questionnaire',
  queryFn: async ({ queryKey: [primaryKey, { projectId, buildId }] }) => {
    return (await axios.get(`${primaryKey}/${projectId}/${buildId}`)).data;
  },
  suspense: true,
});
