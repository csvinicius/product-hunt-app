import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { PostCard } from '../../components/PostCard';
import { usePosts } from './usePosts';
import type { Post, OrderProp } from './types';

const ListContainer = styled.div`
  padding: 12px;
  max-width: 100%;
  margin: auto;
  background-color: #f0f2f2;
`;

const ScrollMarker = styled.div`
  text-align: center;
  padding: 10px 0;
  font-size: 14px;
  color: #666e77;
`;

export function PostsList({ order }: OrderProp) {
  const { posts, fetchNextPage, isLoading, hasNextPage } = usePosts(order);
  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const [entry] = entries;
        if (entry.isIntersecting && !isLoading && hasNextPage) {
          fetchNextPage();
        }
      },
      {
        threshold: 1.0,
      }
    );

    const currentRef = observerRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [isLoading, hasNextPage, fetchNextPage]);

  return (
    <ListContainer>
      {posts.map((post: Post) => (
        <PostCard key={post.id} post={post} />
      ))}

      <ScrollMarker ref={observerRef}>
        {isLoading && <p>Loading</p>}
        {!hasNextPage && <p>Fim dos resultados</p>}
      </ScrollMarker>
    </ListContainer>
  );
}