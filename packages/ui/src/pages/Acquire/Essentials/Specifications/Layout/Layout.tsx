import { Outlet } from 'react-router-dom';
import Questionnaire from './Questionnaire';
export default function SpecificationsLayout() {
  return (
    <>
      <Outlet />
      <Questionnaire />
    </>
  );
}
