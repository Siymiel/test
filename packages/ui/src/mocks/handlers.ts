// src/mocks/handlers.js
import { rest } from 'msw';
import { UseProjectResponse } from '../pages/Acquire/Essentials/queries/project';
import { UseBuildStatusResponse } from '../pages/Acquire/Essentials/queries/build';
import { MODEL_DEVELOPMENT_STEP_STATUSES } from '../components/ModelDevelopmentSteps';

const fakeProjectsData: {
  [index: string]: UseProjectResponse;
} = {
  project1: {
    project: {
      name: 'Mock Project',
      id: 'project1',
      builds: [
        {
          id: 'build1',
          name: 'Fake Build 1',
          questionnaire: { completed: ['Introduction', 'Deployment'] },
        },
        { id: 'build2', name: 'Fake Build 2' },
      ],
      organization: 'XYZ Credit Union',
      status: 'Setup & Design',
      activity: {
        overview: 0,
        specifications: 0,
        data: 4,
        results: 1,
        documents: 0,
      },
    },
  },
};

const fakeBuildStatus: {
  [index: string]: UseBuildStatusResponse;
} = {
  build1: {
    statuses: {
      setup: {
        status: MODEL_DEVELOPMENT_STEP_STATUSES.COMPLETE,
        updatedOn: '2023-02-28T00:06:25+00:00',
        children: {
          questionnaire: {
            status: MODEL_DEVELOPMENT_STEP_STATUSES.COMPLETE,
            updatedOn: '2023-02-28T00:06:25+00:00',
          },
          dataUpload: {
            status: MODEL_DEVELOPMENT_STEP_STATUSES.COMPLETE,
            updatedOn: '2023-02-28T00:06:25+00:00',
          },
          document: {
            status: MODEL_DEVELOPMENT_STEP_STATUSES.COMPLETE,
            updatedOn: '2023-02-28T00:06:25+00:00',
          },
        },
      },
      development: {
        status: MODEL_DEVELOPMENT_STEP_STATUSES.COMPLETE,
        updatedOn: '2023-02-28T00:06:25+00:00',
        children: {
          results: {
            status: MODEL_DEVELOPMENT_STEP_STATUSES.COMPLETE,
            updatedOn: '2023-02-28T00:06:25+00:00',
          },
          performance: {
            status: MODEL_DEVELOPMENT_STEP_STATUSES.COMPLETE,
            updatedOn: '2023-02-28T00:06:25+00:00',
          },
          comparison: {
            status: MODEL_DEVELOPMENT_STEP_STATUSES.COMPLETE,
            updatedOn: '2023-02-28T00:06:25+00:00',
          },
          codes: {
            status: MODEL_DEVELOPMENT_STEP_STATUSES.COMPLETE,
            updatedOn: '2023-02-28T00:06:25+00:00',
          },
          manual: {
            status: MODEL_DEVELOPMENT_STEP_STATUSES.COMPLETE,
            updatedOn: '2023-02-28T00:06:25+00:00',
          },
        },
      },
      deployment: {
        status: MODEL_DEVELOPMENT_STEP_STATUSES.COMPLETE,
        updatedOn: '2023-02-28T00:06:25+00:00',
        children: {
          audit: {
            status: MODEL_DEVELOPMENT_STEP_STATUSES.COMPLETE,
            updatedOn: '2023-02-28T00:06:25+00:00',
          },
          monitor: {
            status: MODEL_DEVELOPMENT_STEP_STATUSES.COMPLETE,
            updatedOn: '2023-02-28T00:06:25+00:00',
          },
        },
      },
    },
  },
  build2: {
    statuses: {
      setup: {
        status: MODEL_DEVELOPMENT_STEP_STATUSES.IN_PROGRESS,
        updatedOn: '2023-02-28T00:06:25+00:00',
        children: {
          questionnaire: {
            status: MODEL_DEVELOPMENT_STEP_STATUSES.COMPLETE,
            updatedOn: '2023-02-28T00:06:25+00:00',
          },
          dataUpload: {
            status: MODEL_DEVELOPMENT_STEP_STATUSES.TODO,
          },
          document: {
            status: MODEL_DEVELOPMENT_STEP_STATUSES.COMPLETE,
            updatedOn: '2023-02-28T00:06:25+00:00',
          },
        },
      },
      development: {
        status: MODEL_DEVELOPMENT_STEP_STATUSES.COMPLETE,
        updatedOn: '2023-02-28T00:06:25+00:00',
        children: {
          results: {
            status: MODEL_DEVELOPMENT_STEP_STATUSES.COMPLETE,
            updatedOn: '2023-02-28T00:06:25+00:00',
          },
          performance: {
            status: MODEL_DEVELOPMENT_STEP_STATUSES.COMPLETE,
            updatedOn: '2023-02-28T00:06:25+00:00',
          },
          comparison: {
            status: MODEL_DEVELOPMENT_STEP_STATUSES.COMPLETE,
            updatedOn: '2023-02-28T00:06:25+00:00',
          },
          codes: {
            status: MODEL_DEVELOPMENT_STEP_STATUSES.COMPLETE,
            updatedOn: '2023-02-28T00:06:25+00:00',
          },
          manual: {
            status: MODEL_DEVELOPMENT_STEP_STATUSES.COMPLETE,
            updatedOn: '2023-02-28T00:06:25+00:00',
          },
        },
      },
      deployment: {
        status: MODEL_DEVELOPMENT_STEP_STATUSES.COMPLETE,
        updatedOn: '2023-02-28T00:06:25+00:00',
        children: {
          audit: {
            status: MODEL_DEVELOPMENT_STEP_STATUSES.COMPLETE,
            updatedOn: '2023-02-28T00:06:25+00:00',
          },
          monitor: {
            status: MODEL_DEVELOPMENT_STEP_STATUSES.COMPLETE,
            updatedOn: '2023-02-28T00:06:25+00:00',
          },
        },
      },
    },
  },
};

export const handlers = [
  rest.get('/api/projects', (req, res, ctx) => {
    return res(ctx.json(fakeProjectsData));
  }),

  rest.get('/api/project/:projectId', (req, res, ctx) => {
    const { projectId } = req.params;

    if (
      projectId &&
      !Array.isArray(projectId) &&
      !Object.prototype.hasOwnProperty.call(
        fakeProjectsData,
        projectId as string,
      )
    ) {
      return res(ctx.status(404));
    }

    return res(ctx.json(fakeProjectsData[projectId as string]));
  }),

  rest.get('/api/build/:buildId/status', (req, res, ctx) => {
    const { buildId } = req.params;

    if (
      buildId &&
      !Array.isArray(buildId) &&
      !Object.prototype.hasOwnProperty.call(fakeBuildStatus, buildId as string)
    ) {
      return res(ctx.status(404));
    }

    return res(ctx.json(fakeBuildStatus[buildId as string]));
  }),

  rest.get('/api/questionnaire/:projectId/:buildId', (req, res, ctx) => {
    const { projectId, buildId } = req.params;

    const builds = fakeProjectsData[projectId.toString()]?.project?.builds;

    const questionnaire = builds
      ? builds.find((b) => b.id === buildId)?.questionnaire
      : null;

    return res(ctx.json(questionnaire));
  }),
];
