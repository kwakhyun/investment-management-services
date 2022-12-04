import { useRouter } from 'next/router';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import Footer from './Footer';
import Header from './Header';
import Sider from './Sider';

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  const { pathname, asPath } = useRouter();
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    contentRef.current?.scrollTo(0, 0);
  }, [asPath]);

  if (pathname === '/' || pathname.startsWith('/accounts') || pathname.startsWith('/users'))
    return (
      <Container>
        <Sider />
        <Header />
        <Content ref={contentRef}>
          <ChildrenContainer>{children}</ChildrenContainer>
          <Footer />
        </Content>
      </Container>
    );

  return <>{children}</>;
}

export default Layout;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-template-rows: 1fr 9fr;
  grid-template-areas:
    'sider header'
    'sider content';
`;

const Content = styled.div`
  gred-area: content;
  background-color: ${({ theme }) => theme.GRAY_BG};
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ChildrenContainer = styled.div`
  position: relative;
  min-height: calc(90vh - 100px);
  padding: 20px;
`;
