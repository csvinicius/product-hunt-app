import { useEffect, useState, useCallback, useRef } from 'react';
import { api } from '../../api/productHunt';
import { getPostsQuery } from './queries';
import type { Post, OrderType } from './types';

const orderMapping = {
  POPULAR: 'VOTES',
  NEWEST: 'NEWEST'
};

export function usePosts(order: OrderType) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [cursor, setCursor] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const previousOrderRef = useRef<OrderType | null>(null);
  const isFetchingRef = useRef(false);

  useEffect(() => {
    if (previousOrderRef.current !== null && previousOrderRef.current !== order) {
      setPosts([]);
      setCursor(null);
      setHasNextPage(true);
      setError(null);
    }

    previousOrderRef.current = order;
  }, [order]);

  const fetchPosts = useCallback(async () => {
    if (isLoading || !hasNextPage || isFetchingRef.current || error) return;

    isFetchingRef.current = true;
    setIsLoading(true);

    try {
      const response = await api.post('', {
        query: getPostsQuery,
        variables: {
          first: 10,
          after: cursor,
          order: orderMapping[order]
        },
      });

      if (response.data.errors) {
        throw new Error(response.data.errors[0].message);
      }

      const data = response.data.data;
      if (!data || !data.posts) {
        throw new Error('Resposta inválida da API');
      }

      const newPosts: Post[] = data.posts.edges.map((edge: any) => edge.node);

      setPosts(prev => [...prev, ...newPosts]);
      setHasNextPage(data.posts.pageInfo.hasNextPage);
      setCursor(data.posts.pageInfo.endCursor);
    } catch (error) {
      console.error('Erro ao buscar posts:', error);
      setError(error instanceof Error ? error.message : 'Erro desconhecido');

      setHasNextPage(false);
    } finally {
      setIsLoading(false);
      isFetchingRef.current = false;
    }
  }, [order, cursor, isLoading, hasNextPage, error]);

  useEffect(() => {
    if (!isLoading && cursor === null && !isFetchingRef.current && !error) {
      fetchPosts();
    }
  }, [fetchPosts, isLoading, cursor, error]);

  const retryAfterError = useCallback(() => {
    setError(null);
    setHasNextPage(true);
    fetchPosts();
  }, [fetchPosts]);

  return {
    posts,
    fetchNextPage: fetchPosts,
    isLoading,
    hasNextPage,
    error,
    retryAfterError
  };
}