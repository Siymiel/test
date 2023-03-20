import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { ErrorPage } from './components';
import theme from './theme';
import { routes as acquireRoutes } from './pages/Acquire';
import { worker } from './mocks/browser';

import { RootLayout, loaders as rootLayoutLoaders } from './pages/RootLayout';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './query-client';

worker.start();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<RootLayout />}
      loader={rootLayoutLoaders.layoutLoader}
      errorElement={<ErrorPage />}
    >
      <Route>{acquireRoutes}</Route>
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>,
);
