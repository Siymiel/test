import { defer, LoaderFunction } from 'react-router-dom';
import { queryClient } from '../../../query-client';
import { useBuildStatus } from './queries/build';
import { useProject } from './queries/project';

const projectRouteLoader: LoaderFunction = async ({
  params: { projectId },
}) => {
  if (!projectId) {
    throw new Response('Not Found', { status: 404 });
  }

  return defer({
    project: queryClient.fetchQuery(
      useProject.getKey({ projectId }),
      useProject.queryFn,
    ),
  });
};

const overviewRouteLoader: LoaderFunction = async ({
  params: { projectId, buildId },
}) => {
  if (!projectId || !buildId) {
    throw new Response('Not Found', { status: 404 });
  }

  return defer({
    buildStatus: queryClient.fetchQuery(
      useBuildStatus.getKey({ projectId, buildId }),
      useBuildStatus.queryFn,
    ),
  });
};

export const loaders = { projectRouteLoader, overviewRouteLoader };
