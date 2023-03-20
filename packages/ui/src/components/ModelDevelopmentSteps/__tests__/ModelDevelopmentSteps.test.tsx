import { render } from 'test-utils';
import { vi } from 'vitest';
import ModelDevelopmentSteps from '../ModelDevelopmentSteps';
import { MODEL_DEVELOPMENT_STEPS_FILTERS } from '../types';

test('loads items eventually', () => {
  const mock = vi.fn().mockReturnValue(<></>);

  const { container } = render(
    <ModelDevelopmentSteps>{mock}</ModelDevelopmentSteps>,
  );

  expect(container).toBeDefined();
  expect(mock).lastCalledWith(MODEL_DEVELOPMENT_STEPS_FILTERS.ALL);
  expect(mock).toBeCalledTimes(1);
});
