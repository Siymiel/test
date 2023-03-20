import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { TabbedNavigation, TabbedNavigationItem } from '..';

const tabs = [
  {
    title: 'Tab 1',
    path: '/tab1',
    content: 'This is the content for tab 1',
  },
  {
    title: 'Tab 2',
    path: '/tab2',
    content: 'This is the content for tab 2',
  },
];

describe('TabbedNavigation', () => {
  it('renders the correct tabs', () => {
    const { getByText } = render(
      <TabbedNavigation tabContents={tabs}>
        {tabs.map((tab) => (
          <TabbedNavigationItem key={tab.path} path={tab.path}>
            {tab.title}
          </TabbedNavigationItem>
        ))}
      </TabbedNavigation>,
      { wrapper: MemoryRouter },
    );

    tabs.forEach((tab) => {
      const tabButton = getByText(tab.title);
      expect(tabButton).toBeInTheDocument();
    });
  });

  it('renders the correct content when a tab is clicked', () => {
    const { getByText } = render(
      <TabbedNavigation tabContents={tabs}>
        {tabs.map((tab) => (
          <TabbedNavigationItem key={tab.path} path={tab.path}>
            {tab.title}
          </TabbedNavigationItem>
        ))}
      </TabbedNavigation>,
      { wrapper: MemoryRouter },
    );

    const tab1Button = getByText(tabs[0].title);
    fireEvent.click(tab1Button);

    const tab1Content = getByText(tabs[0].content);
    expect(tab1Content).toBeInTheDocument();

    const tab2Button = getByText(tabs[1].title);
    fireEvent.click(tab2Button);

    const tab2Content = getByText(tabs[1].content);
    expect(tab2Content).toBeInTheDocument();
  });

  it('renders TabbedNavigation with correct number of tabs', () => {
    const { getAllByRole } = render(
      <MemoryRouter>
        <TabbedNavigation tabContents={tabs}>
          <TabbedNavigationItem path="/tab1">Tab 1</TabbedNavigationItem>
          <TabbedNavigationItem path="/tab2">Tab 2</TabbedNavigationItem>
          <TabbedNavigationItem path="/tab3">Tab 3</TabbedNavigationItem>
        </TabbedNavigation>
      </MemoryRouter>,
    );

    expect(getAllByRole('tab')).toHaveLength(3);
  });

  it('renders TabbedNavigation with selected tab highlighted', () => {
    const { getByRole } = render(
      <MemoryRouter initialEntries={['/tab2']}>
        <TabbedNavigation tabContents={tabs}>
          <TabbedNavigationItem path="/tab1">Tab 1</TabbedNavigationItem>
          <TabbedNavigationItem path="/tab2">Tab 2</TabbedNavigationItem>
          <TabbedNavigationItem path="/tab3">Tab 3</TabbedNavigationItem>
        </TabbedNavigation>
      </MemoryRouter>,
    );

    const selectedTab = getByRole('tab', { selected: true });
    expect(selectedTab).toHaveTextContent('Tab 1');
  });
});

describe('TabbedNavigationItem', () => {
  it('renders a NavLink with the correct path', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <TabbedNavigation tabContents={tabs}>
          <TabbedNavigationItem path="/tab1">Tab 1</TabbedNavigationItem>
        </TabbedNavigation>
      </MemoryRouter>,
    );
    const navLink = getByTestId('customTabButton');
    expect(navLink).toHaveAttribute('href', '/tab1');
  });

  it('renders the active style when the NavLink is active', () => {
    const { getByTestId } = render(
      <MemoryRouter initialEntries={['/tab1']}>
        <TabbedNavigation tabContents={tabs}>
          <TabbedNavigationItem path="/tab1">Tab 1</TabbedNavigationItem>
        </TabbedNavigation>
      </MemoryRouter>,
    );
    const navLink = getByTestId('customTabButton');
    expect(navLink).toHaveAttribute('aria-selected', 'true');
  });
});
