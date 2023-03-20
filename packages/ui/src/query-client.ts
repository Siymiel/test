import {
  QueryClient,
  QueryFunction,
  QueryKey,
  useQuery,
} from '@tanstack/react-query';
import { createQueryKeyStore } from '@lukemorales/query-key-factory';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 10,
    },
  },
});
useQuery;

export const queryKeys = createQueryKeyStore({
  essentials: {
    getAllProjects: null,
    getProjectById: (projectId: string) => [projectId],
    getBuildById: (projectId: string, buildId: string) => [projectId, buildId],
  },
});

export interface ReactQueryProps {
  queryKey: QueryKey;
  queryFn: QueryFunction;
}
