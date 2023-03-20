import {
  MenuItem,
  Menu as MenuContainer,
} from '../../../../../../components/Navigation';

export default function Menu() {
  return (
    <MenuContainer>
      <MenuItem name="Introduction" path="introduction" />
      <MenuItem name="Model Development Methodology" path="modeldevelopment" />
      <MenuItem name="Data Input & Sources" path="datainput" />
      <MenuItem name="Benchmarking Score" path="benchmarking" />
      <MenuItem name="Performance Flag Definition" path="performanceflag" />
      <MenuItem name="Bureau Inference" path="bureauinference" />
      <MenuItem name="Reject Inference" path="rejectinference" />
      <MenuItem name="Explainability" path="explainability" />
      <MenuItem name="Deployment" path="deployment" next="../overview" />
    </MenuContainer>
  );
}
