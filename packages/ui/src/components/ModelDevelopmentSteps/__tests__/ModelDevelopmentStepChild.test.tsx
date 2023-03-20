import { Accordion } from '@chakra-ui/react';
import { getByText, render, screen } from 'test-utils';
import ModelDevelopmentStep from '../ModelDevelopmentStep';
import ModelDevelopmentStepChild from '../ModelDevelopmentStepChild';
import { MODEL_DEVELOPMENT_STEP_STATUSES } from '../types';

test('loads items eventually', () => {
  const title = 'Model Development Step Test Child';

  render(
    <Accordion>
      <ModelDevelopmentStep
        title={'Model Development Step Test'}
        index={1}
        status={MODEL_DEVELOPMENT_STEP_STATUSES.COMPLETE}
      >
        <ModelDevelopmentStepChild
          buildStep={{ status: MODEL_DEVELOPMENT_STEP_STATUSES.PENDING }}
          title={title}
        />
      </ModelDevelopmentStep>
    </Accordion>,
  );

  expect(screen.getByText(title)).toBeDefined();

  const status = screen.getAllByTestId('status-tag');
  expect(status).toBeDefined();
  expect(status).toHaveLength(2);

  expect(
    getByText(
      status[0],
      MODEL_DEVELOPMENT_STEP_STATUSES.COMPLETE.toUpperCase(),
    ),
  ).toBeDefined();

  expect(
    getByText(status[1], MODEL_DEVELOPMENT_STEP_STATUSES.PENDING.toUpperCase()),
  ).toBeDefined();
});
