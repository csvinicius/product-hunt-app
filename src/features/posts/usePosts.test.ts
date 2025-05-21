import { renderHook, waitFor } from '@testing-library/react';
import { usePosts } from './usePosts';
import { api } from '../../api/productHunt';

jest.mock('../../api/productHunt', () => ({
  api: {
    post: jest.fn(),
  },
}));

const mockPost = {
  id: '1',
  name: 'Mock Post',
  tagline: 'Tagline',
  votesCount: 10,
  thumbnail: {
    url: 'https://example.com/image.jpg',
  },
};

describe('usePosts', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('fetches posts on mount', async () => {
    (api.post as jest.Mock).mockResolvedValue({
      data: {
        data: {
          posts: {
            edges: [{ node: mockPost }],
            pageInfo: {
              hasNextPage: false,
              endCursor: null,
            },
          },
        },
        errors: null,
      },
    });

    const { result } = renderHook(() => usePosts('POPULAR'));

    await waitFor(() => {
      expect(result.current.posts.length).toBe(1);
    });

    expect(result.current.posts[0]).toEqual(mockPost);
    expect(result.current.error).toBeNull();
  });
});