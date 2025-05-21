import { render, screen } from '@testing-library/react';
import { PostCard } from './PostCard';

describe('PostCard', () => {
  const mockPost = {
    id: '1',
    name: 'Test Product',
    tagline: 'This is a test product',
    url: 'https://example.com',
    votesCount: 42,
    thumbnail: {
      url: 'https://example.com/image.jpg'
    }
  };

  it('renders post information correctly', () => {
    render(<PostCard post={mockPost} />);

    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('This is a test product')).toBeInTheDocument();
    expect(screen.getByText((content) => content.includes('42'))).toBeInTheDocument();
    expect(screen.getByText((content) => content.includes('Votes'))).toBeInTheDocument();

    const image = screen.getByAltText('Test Product');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'https://example.com/image.jpg');
  });
});