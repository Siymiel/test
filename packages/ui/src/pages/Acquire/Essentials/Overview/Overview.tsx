import { Box, Flex } from '@chakra-ui/react';
import { Await, useLoaderData } from 'react-router-dom';
import { UseBuildStatusResponse } from '../queries/build';
import { ErrorPage } from '../../../../components';
import React from 'react';
import {
  ModelDevelopmentStep,
  ModelDevelopmentStepChild,
  ModelDevelopmentSteps,
} from '../../../../components/ModelDevelopmentSteps';
import {
  MODEL_DEVELOPMENT_STEPS_FILTERS,
  MODEL_DEVELOPMENT_STEP_STATUSES,
} from '../../../../components/ModelDevelopmentSteps/types';
import { StepWrapperProps } from './types';

const STEPS = {
  DEVELOPMENT: 'development',
  SETUP: 'setup',
  DEPLOYMENT: 'deployment',
};

const CHILD_STEPS = {
  QUESTIONNAIRE: 'questionnaire',
  DATA_UPLOAD: 'dataUpload',
  DOCUMENT: 'document',
  RESULTS: 'results',
  PERFORMANCE: 'performance',
  COMPARISON: 'comparison',
  CODES: 'codes',
  MANUAL: 'manual',
  AUDIT: 'audit',
  MONITOR: 'monitor',
};

export default function Overview() {
  const { buildStatus } = useLoaderData() as {
    buildStatus: Promise<UseBuildStatusResponse>;
  };

  return (
    <Flex>
      <Box w="65%">
        <React.Suspense fallback={<ErrorPage />}>
          <Await resolve={buildStatus} errorElement={<ErrorPage />}>
            {({ statuses }: UseBuildStatusResponse) => (
              <>
                <Box
                  as="h2"
                  mb={4}
                  fontSize="26"
                  lineHeight="8"
                  fontWeight="700"
                >
                  Model Development Steps
                </Box>
                <ModelDevelopmentSteps>
                  {(currentFilter) => (
                    <>
                      <SetupStep
                        status={statuses[STEPS.SETUP]}
                        currentFilter={currentFilter}
                      />
                      <DevelopmentStep
                        status={statuses[STEPS.DEVELOPMENT]}
                        currentFilter={currentFilter}
                      />
                      <DeploymentStep
                        status={statuses[STEPS.DEPLOYMENT]}
                        currentFilter={currentFilter}
                      />
                    </>
                  )}
                </ModelDevelopmentSteps>
              </>
            )}
          </Await>
        </React.Suspense>
      </Box>
    </Flex>
  );
}

function SetupStep({ status, currentFilter }: StepWrapperProps) {
  const stepStatus = status ?? { status: null, children: null };

  if (
    stepStatus.status === MODEL_DEVELOPMENT_STEP_STATUSES.COMPLETE &&
    currentFilter === MODEL_DEVELOPMENT_STEPS_FILTERS.TODO
  ) {
    return <></>;
  }

  return (
    <ModelDevelopmentStep
      title="Setup & Design"
      index={1}
      status={stepStatus.status}
    >
      <ModelDevelopmentStepChild
        title="Design Questionnaire"
        buildStep={stepStatus.children?.[CHILD_STEPS.QUESTIONNAIRE]}
      />
      <ModelDevelopmentStepChild
        title="Client Data Upload"
        buildStep={stepStatus.children?.[CHILD_STEPS.DATA_UPLOAD]}
        nextStep="Upload Document"
      />
      <ModelDevelopmentStepChild
        title="Approve Design Specifications Document"
        buildStep={stepStatus.children?.[CHILD_STEPS.DOCUMENT]}
      />
    </ModelDevelopmentStep>
  );
}

function DevelopmentStep({ status, currentFilter }: StepWrapperProps) {
  const stepStatus = status ?? { status: null, children: null };

  if (
    stepStatus.status === MODEL_DEVELOPMENT_STEP_STATUSES.COMPLETE &&
    currentFilter === MODEL_DEVELOPMENT_STEPS_FILTERS.TODO
  ) {
    return <></>;
  }

  return (
    <ModelDevelopmentStep
      title="Development"
      index={2}
      status={stepStatus.status}
    >
      <ModelDevelopmentStepChild
        title="Approve Segmentation Results"
        buildStep={stepStatus.children?.[CHILD_STEPS.RESULTS]}
      />
      <ModelDevelopmentStepChild
        title="Approve Model Performance"
        buildStep={stepStatus.children?.[CHILD_STEPS.PERFORMANCE]}
        nextStep="Upload Document"
      />
      <ModelDevelopmentStepChild
        title="Approve Model comparison"
        buildStep={stepStatus.children?.[CHILD_STEPS.COMPARISON]}
      />
      <ModelDevelopmentStepChild
        title="Approve AA Codes"
        buildStep={stepStatus.children?.[CHILD_STEPS.CODES]}
      />
      <ModelDevelopmentStepChild
        title="Approve Model Manual"
        buildStep={stepStatus.children?.[CHILD_STEPS.MANUAL]}
      />
    </ModelDevelopmentStep>
  );
}

function DeploymentStep({ status, currentFilter }: StepWrapperProps) {
  const stepStatus = status ?? { status: null, children: null };

  if (
    stepStatus.status === MODEL_DEVELOPMENT_STEP_STATUSES.COMPLETE &&
    currentFilter === MODEL_DEVELOPMENT_STEPS_FILTERS.TODO
  ) {
    return <></>;
  }

  return (
    <ModelDevelopmentStep
      title="Deployment"
      index={3}
      status={stepStatus.status}
    >
      <ModelDevelopmentStepChild
        title="Approve Deployment Audit"
        buildStep={stepStatus.children?.[CHILD_STEPS.AUDIT]}
      />
      <ModelDevelopmentStepChild
        title="Monitor Your Model "
        buildStep={stepStatus.children?.[CHILD_STEPS.MONITOR]}
        nextStep="Upload Document"
      />
    </ModelDevelopmentStep>
  );
}
