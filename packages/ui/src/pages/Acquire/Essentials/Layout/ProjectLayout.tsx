// chakra is adding a more specific margin top here that I can't disable

import { Flex, VStack } from '@chakra-ui/react';
import { Await, Outlet, useLoaderData } from 'react-router-dom';
import { ErrorPage } from '../../../../components';
import { Content } from '../../../../components/Content';
import { UseProjectResponse } from '../queries/project';
import Banner from './Banner';
import Navigation from './Navigation';

// find a better way to override this
export default function AcquireEssentialsProjectLayout() {
  const { project } = useLoaderData() as {
    project: Promise<UseProjectResponse>;
  };

  return (
    <VStack>
      <Await resolve={project} errorElement={<ErrorPage />}>
        <Banner />
      </Await>
      <Flex w="full" sx={{ margin: '0 !important' }}>
        <Navigation />
        <Content>
          <Outlet />
        </Content>
      </Flex>
    </VStack>
  );
}
