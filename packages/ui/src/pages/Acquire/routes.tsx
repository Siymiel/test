import { Route } from 'react-router-dom';
import {
  AcquireEssentialsLayout,
  routes as essentialsRoutes,
} from './Essentials';
import AcquireModelLayout from './Layout';

export default (
  <>
    <Route path="acquire" element={<AcquireModelLayout />}>
      <Route path="ess" element={<AcquireEssentialsLayout />}>
        {essentialsRoutes}
      </Route>
    </Route>
  </>
);
