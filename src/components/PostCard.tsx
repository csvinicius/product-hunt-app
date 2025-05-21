import styled from 'styled-components';
import type { Post } from '../features/posts/types';

const Card = styled.div`
  display: flex;
  gap: 12px;
  padding: 16px;
  border: 1px solid #eee;
  border-radius: 12px;
  margin-bottom: 16px;
  background-color: #fff;
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  object-fit: cover;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 4px;
`;

const PostName = styled.h4`
  margin: 0;
  font-size: 14px;
  font-weight: lighter;
`;

const PostTagline = styled.span`
  font-size: 10px;
`;

export function PostCard({ post }: { post: Post }) {
  return (
    <Card>
      <Image src={post.thumbnail.url} alt={post.name} />
      <Content>
        <PostName>{post.name}</PostName>
        <PostTagline>{post.tagline}</PostTagline>
        <span>{post.votesCount} votes</span>
      </Content>
    </Card>
  );
}