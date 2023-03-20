import { ChakraProvider } from '@chakra-ui/react';
import { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import theme from '../src/theme';
import {
  createMemoryRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from 'react-router-dom';
import userEvent from '@testing-library/user-event';

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options });

const renderWithRouter = (
  componentWithRoutes: ReactElement,
  {
    initialRoute = '/',
    routes = <></>,
  }: { initialRoute?: string; routes?: JSX.Element } = {},
) => {
  window.history.pushState({}, 'Test page', initialRoute);

  const router = createMemoryRouter(
    createRoutesFromElements(
      <Route path={'/'} element={<Root />}>
        {routes}
      </Route>,
    ),
    { initialEntries: ['/', initialRoute] },
  );
  // console.log(router.routes, router.state);

  return {
    user: userEvent.setup(),
    ...render(<Wrapper />),
  };

  function Root() {
    return (
      <>
        {componentWithRoutes}
        <Outlet />
      </>
    );
  }

  function Wrapper() {
    return (
      <AllTheProviders>
        <RouterProvider router={router} />
      </AllTheProviders>
    );
  }
};

export * from '@testing-library/react';
export { customRender as render, renderWithRouter };
