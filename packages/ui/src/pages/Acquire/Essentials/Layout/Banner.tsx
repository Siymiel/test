import { BannerComponent } from '../../../../components/Banner';
import { useParams } from 'react-router-dom';
import { useProject } from '../queries/project';

export default function Banner() {
  const { projectId, buildId } = useParams();

  const { data } = useProject({
    variables: { projectId },
  });

  const build = data?.project.builds?.find((build) => build.id === buildId);

  return (
    <BannerComponent
      projectName={data?.project.name}
      buildName={build?.name ?? ''}
      status={data?.project.status}
      organization={data?.project.organization}
      solution="Acquire Essentials"
    />
  );
}
