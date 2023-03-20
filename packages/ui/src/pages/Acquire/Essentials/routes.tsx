import { Route } from 'react-router-dom';
import { DocumentIndex, DocumentsLayout } from './Documents';
import { Overview } from './Overview';
import { ResultsIndex, ResultsLayout } from './Results';
import { loaders } from './loaders';
import { ProjectLayout, Layout } from './Layout';
import { DataIndex, DataLayout } from './Data';
import { SpecificationsLayout } from './Specifications';
import {
  Introduction,
  ModelDevelopment,
  DataInput,
  Benchmarking,
  PerformanceFlag,
  BureauInference,
  RejectInference,
  Explainability,
  Deployment,
} from './Specifications/Layout/Forms';

export default (
  <>
    <Route path=":projectId" element={<Layout />}>
      <Route
        path=":buildId"
        element={<ProjectLayout />}
        loader={loaders.projectRouteLoader}
        errorElement={<div>Oops! No projects Found</div>}
      >
        <Route path="data" element={<DataLayout />}>
          <Route element={<DataIndex />} index />
        </Route>
        <Route path="documents" element={<DocumentsLayout />}>
          <Route index element={<DocumentIndex />} />
        </Route>
        <Route
          path="overview"
          element={<Overview />}
          loader={loaders.overviewRouteLoader}
        />
        <Route path="results" element={<ResultsLayout />}>
          <Route index element={<ResultsIndex />} />
        </Route>
        <Route path="specifications" element={<SpecificationsLayout />}>
          <Route path="introduction" element={<Introduction />} />
          <Route path="modeldevelopment" element={<ModelDevelopment />} />
          <Route path="datainput" element={<DataInput />} />
          <Route path="benchmarking" element={<Benchmarking />} />
          <Route path="performanceflag" element={<PerformanceFlag />} />
          <Route path="bureauinference" element={<BureauInference />} />
          <Route path="rejectinference" element={<RejectInference />} />
          <Route path="explainability" element={<Explainability />} />
          <Route path="deployment" element={<Deployment />} />
        </Route>
      </Route>
    </Route>
  </>
);
