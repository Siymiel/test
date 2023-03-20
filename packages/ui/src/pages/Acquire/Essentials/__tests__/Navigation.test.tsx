import { Route } from 'react-router-dom';
import { renderWithRouter, fireEvent, screen } from 'test-utils';
import Navigation from '../Layout/Navigation';
import { vi } from 'vitest';

vi.mock('../queries/project', () => {
  return {
    useProject: () => ({
      data: {
        project: {
          id: 'project1',
          name: 'Mock Project',
          builds: [
            { id: 'build1', name: 'Fake Build 1' },
            { id: 'build2', name: 'Fake Build 2' },
          ],
          activity: {
            overview: 0,
            specifications: 0,
            data: 434,
            results: 1,
            documents: 0,
          },
        },
      },
    }),
  };
});

test('loads items eventually', () => {
  const routes = (
    <>
      <Route path="data" element={<></>} />
      <Route path="overview" element={<></>} />
    </>
  );

  const { container } = renderWithRouter(<Navigation />, {
    initialRoute: '/data',
    routes,
  });

  const dataLink = screen.getByText('Data');
  expect(dataLink).toHaveClass('active');
  expect(container.getElementsByClassName('active')).toHaveLength(1);

  fireEvent.click(screen.getByText('Overview'));

  const overviewLink = screen.getByText('Overview');
  expect(overviewLink).toHaveClass('css-1glvgqu');

  expect(container.getElementsByClassName('active')).toHaveLength(1);

  const dataCount = screen.getByText('434');
  expect(dataCount).toBeDefined();
});
