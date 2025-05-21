import { useState } from 'react';
import { PostsList } from '../features/posts/PostsList';
import { GlobalStyle } from '../styles/GlobalStyles';
import { Header } from '../components/Header';

export function Home() {
  const [tab, setTab] = useState<'POPULAR' | 'NEWEST'>('POPULAR');

  return (
    <>
      <GlobalStyle />
      <Header tab={tab} setTab={setTab} />
      <PostsList order={tab} />
    </>
  );
};