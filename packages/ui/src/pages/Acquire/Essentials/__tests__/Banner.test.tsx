import { Route } from 'react-router-dom';
import { renderWithRouter, screen } from 'test-utils';
import Banner from '../Layout/Banner';
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
          organization: 'XYZ Credit Union',
          status: 'Setup & Design',
        },
      },
    }),
  };
});

test('loads items eventually', () => {
  const routes = (
    <>
      <Route path=":projectId/:buildId" element={<></>} />
    </>
  );

  const { container } = renderWithRouter(<Banner />, {
    initialRoute: '/project1/build2',
    routes,
  });

  const name = screen.getByText('Mock Project - Fake Build 2');
  expect(name).toHaveClass('chakra-heading');

  const status = screen.getByText('Setup & Design');
  expect(status).toHaveClass('chakra-text');

  const client = screen.getByText('XYZ Credit Union');
  expect(client).toHaveClass('chakra-heading');

  const solution = screen.getByText('Acquire Essentials');
  expect(solution).toHaveClass('chakra-heading');
});
