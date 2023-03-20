import { fireEvent, render, screen } from 'test-utils';
import { vi } from 'vitest';
import { ModelDevelopmentFilters } from '../ModelDevelopmentFilters';
import { MODEL_DEVELOPMENT_STEPS_FILTERS } from '../types';

test('loads items eventually', () => {
  const { container } = render(
    <ModelDevelopmentFilters
      currentFilter={MODEL_DEVELOPMENT_STEPS_FILTERS.ALL}
      setCurrentFilter={() => {}}
    />,
  );

  const buttons = container.getElementsByTagName('button');
  expect(buttons).toHaveLength(2);
});

test('can click all filter', () => {
  const mock = vi.fn();

  render(
    <ModelDevelopmentFilters
      currentFilter={MODEL_DEVELOPMENT_STEPS_FILTERS.ALL}
      setCurrentFilter={mock}
    />,
  );

  const allButton = screen.getByRole('button', {
    name: /all/i,
  });

  expect(allButton).toBeDefined();

  fireEvent.click(allButton);

  expect(mock).lastCalledWith(MODEL_DEVELOPMENT_STEPS_FILTERS.ALL);
  expect(mock).toBeCalledTimes(1);
});

test('can click todo filter', () => {
  const mock = vi.fn();

  render(
    <ModelDevelopmentFilters
      currentFilter={MODEL_DEVELOPMENT_STEPS_FILTERS.TODO}
      setCurrentFilter={mock}
    />,
  );

  const todoButton = screen.getByRole('button', {
    name: /todo/i,
  });

  expect(todoButton).toBeDefined();

  fireEvent.click(todoButton);

  expect(mock).lastCalledWith(MODEL_DEVELOPMENT_STEPS_FILTERS.TODO);
  expect(mock).toBeCalledTimes(1);
});
