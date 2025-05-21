import { render, screen } from '@testing-library/react';
import { Home } from './Home';

jest.mock('../components/Header', () => ({
  Header: ({ tab }: any) => (
    <div data-testid="header">Header - {tab}</div>
  ),
}));

jest.mock('../features/posts/PostsList', () => ({
  PostsList: ({ order }: any) => (
    <div data-testid="posts-list">PostsList - {order}</div>
  ),
}));

jest.mock('../styles/GlobalStyles', () => ({
  GlobalStyle: () => <style />,
}));

describe('Home page', () => {
  it('renders Header and PostsList with default tab', () => {
    render(<Home />);

    expect(screen.getByTestId('header')).toHaveTextContent('Header - POPULAR');
    expect(screen.getByTestId('posts-list')).toHaveTextContent('PostsList - POPULAR');
  });
});