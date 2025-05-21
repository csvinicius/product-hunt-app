import styled from "styled-components";

type HeaderProps = {
  tab: 'POPULAR' | 'NEWEST';
  setTab: (tab: 'POPULAR' | 'NEWEST') => void;
};

const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  padding: 10px 10px 0;
  background-color: #fff;
`;

export function Header({ tab, setTab }: HeaderProps) {
  return (
    <header>
      <NavContainer>
        <button
          onClick={() => setTab('POPULAR')}
          className={tab === 'POPULAR' ? 'active' : ''}
        >
          Popular
        </button>
        <button
          onClick={() => setTab('NEWEST')}
          className={tab === 'NEWEST' ? 'active' : ''}
        >
          Newest
        </button>
      </NavContainer>
    </header>
  )
};