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
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 4px;
`;

const PostName = styled.h4`
  margin: 0;
  font-size: 14px;
  font-weight: 400;
`;

const PostTagline = styled.span`
  font-size: 12px;
`;

const PostVotes = styled.span`
  color: #595959;
  font-size: 12px;
  font-weight: 900;
  text-align: center;
`;

export function PostCard({ post }: { post: Post }) {
  return (
    <Card>
      <Image src={post.thumbnail.url} alt={post.name} />
      <Content>
        <div>
          <PostName>{post.name}</PostName>
          <PostTagline>{post.tagline}</PostTagline>
        </div>
        <PostVotes>
          {post.votesCount} <br />
          Votes
        </PostVotes>
      </Content>
    </Card>
  );
}