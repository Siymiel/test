import { Route } from 'react-router-dom';
import { renderWithRouter, fireEvent, screen } from 'test-utils';
import { vi } from 'vitest';
import Menu from '../Specifications/Layout/Menu/Menu';

//mocking the response of the useProject method
//First param is the path to where the useProject() is located
vi.mock('../queries/project', () => {
  return {
    useProject: () => ({
      data: {
        project: {
          id: 'project1',
          name: 'Mock Project',
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
        },
      },
    }),
  };
});

test('loads items eventually', async () => {
  const routes = (
    <>
      <Route path=":projectId/:buildId/introduction" element={<></>} />
    </>
  );

  const { container } = renderWithRouter(<Menu />, {
    initialRoute: '/project1/build1/introduction',
    routes,
  });

  const introLink = screen.getByText('Introduction');
  expect(introLink).toHaveClass('css-x77s7o'); // active link
  expect(container.getElementsByClassName('css-x77s7o')).toHaveLength(1);

  const modelDevelopmentLink = screen.getByText(
    'Model Development Methodology',
  );
  expect(modelDevelopmentLink).toHaveClass('css-1lfsqam');

  const dataInputLink = screen.getByText('Data Input & Sources');
  expect(dataInputLink).toHaveClass('css-1lfsqam');

  const benchmarkingLink = screen.getByText('Benchmarking Score');
  expect(benchmarkingLink).toHaveClass('css-1lfsqam');

  const performanceLink = screen.getByText('Performance Flag Definition');
  expect(performanceLink).toHaveClass('css-1lfsqam');

  const biLink = screen.getByText('Bureau Inference');
  expect(biLink).toHaveClass('css-1lfsqam');

  const explainLink = screen.getByText('Explainability');
  expect(explainLink).toHaveClass('css-1lfsqam');

  const deploymentLink = screen.getByText('Deployment');
  expect(deploymentLink).toHaveClass('css-1lfsqam');

  expect(container.getElementsByClassName('css-1lfsqam')).toHaveLength(9); // inactive

  expect(container.getElementsByClassName('css-1i7ptqw')).toHaveLength(2); // complete
  expect(
    container.getElementsByClassName('css-1i7ptqw').item(0)?.parentElement
      ?.innerHTML,
  ).toContain('Introduction');
  expect(
    container.getElementsByClassName('css-1i7ptqw').item(1)?.parentElement
      ?.innerHTML,
  ).toContain('Deployment');

  screen.debug();
});
