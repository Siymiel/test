import { Outlet } from 'react-router-dom';

export function DocumentIndex() {
  return <h2>Document Index</h2>;
}

export function DocumentsLayout() {
  return (
    <>
      <Outlet />
    </>
  );
}
