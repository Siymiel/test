import { Sidebar, SidebarItem } from '../../../../components/Navigation';
import { useParams } from 'react-router-dom';
import { useProject } from '../queries/project';

export default function Navigation() {
  const { projectId } = useParams();
  const { data: _data } = useProject({
    variables: { projectId },
  });

  const {
    project: {
      activity: { overview, specifications, data, results, documents },
    },
  } = _data ?? { project: { activity: {} } };

  return (
    <Sidebar>
      <SidebarItem
        path="overview"
        icon="home"
        text="Overview"
        activityCount={overview}
      />
      <SidebarItem
        path="specifications/introduction"
        icon="filters"
        text="Specifications"
        activityCount={specifications}
      />
      <SidebarItem path="data" icon="range" text="Data" activityCount={data} />
      <SidebarItem
        path="results"
        icon="data"
        text="Results"
        activityCount={results}
      />
      <SidebarItem
        path="documents"
        icon="report"
        text="Documents"
        activityCount={documents}
      />
    </Sidebar>
  );
}
