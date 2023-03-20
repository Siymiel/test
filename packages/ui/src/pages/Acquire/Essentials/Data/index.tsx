import { Outlet } from 'react-router-dom';

export function DataIndex() {
  return <h2>Data Index</h2>;
}

export function DataLayout() {
  return (
    <>
      <Outlet />
    </>
  );
}
