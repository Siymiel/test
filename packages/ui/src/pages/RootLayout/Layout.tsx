import { Outlet } from 'react-router-dom';
import Header from './Header';
// import {
//   TabbedNavigation,
//   TabbedNavigationItem,
// } from '../../components/Navigation';

export default function RootLayout() {
  // const content = [{ content: 'something' }, { content: 'another one' }];
  return (
    <>
      <main>
        <Header />
        {/* <TabbedNavigation tabContents={content}>
          <TabbedNavigationItem path="#">Page 1</TabbedNavigationItem>
          <TabbedNavigationItem path="#">Page 2</TabbedNavigationItem>
        </TabbedNavigation> */}
        <Outlet />
      </main>
    </>
  );
}
