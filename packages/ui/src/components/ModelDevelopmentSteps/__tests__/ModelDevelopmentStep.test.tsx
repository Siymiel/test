import { Accordion } from '@chakra-ui/react';
import { render, screen } from 'test-utils';
import ModelDevelopmentStep from '../ModelDevelopmentStep';
import ModelDevelopmentStepChild from '../ModelDevelopmentStepChild';
import { MODEL_DEVELOPMENT_STEP_STATUSES } from '../types';

test('loads items eventually', () => {
  const title = 'Model Development Step Test';
  const { container } = render(
    <Accordion>
      <ModelDevelopmentStep
        title={title}
        index={1}
        status={MODEL_DEVELOPMENT_STEP_STATUSES.COMPLETE}
      >
        <ModelDevelopmentStepChild
          buildStep={{ status: MODEL_DEVELOPMENT_STEP_STATUSES.COMPLETE }}
          title="Model Development Step Test Child"
        />
      </ModelDevelopmentStep>
    </Accordion>,
  );

  expect(container.getElementsByClassName('chakra-collapse')).toBeDefined();
  expect(screen.getByText(title)).toBeDefined();
  expect(
    screen.getByText(MODEL_DEVELOPMENT_STEP_STATUSES.COMPLETE.toUpperCase()),
  ).toBeDefined();
});
