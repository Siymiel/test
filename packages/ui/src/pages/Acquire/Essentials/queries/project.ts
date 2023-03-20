import { createQuery } from 'react-query-kit';
import axios from 'axios';
import { Maybe } from '../../../../types';

interface UseProjectVariables {
  projectId: Maybe<string>;
}

interface EssentialsProject {
  name: string;
  id: string;
  builds: Array<EssentialsBuild>;
  organization: string;
  status: string;
  activity: EssentialsActivity;
}

interface EssentialsBuild {
  id: string;
  name: string;
  questionnaire?: { completed?: Array<string> };
}

interface EssentialsActivity {
  overview: number;
  specifications: number;
  data: number;
  results: number;
  documents: number;
}

export interface UseProjectResponse {
  project: EssentialsProject;
}

export const useProject = createQuery<UseProjectResponse, UseProjectVariables>({
  primaryKey: '/api/project',
  queryFn: async ({ queryKey: [primaryKey, { projectId }] }) => {
    return (await axios.get(`${primaryKey}/${projectId}`)).data;
  },
  suspense: true,
});
