import React from 'react';
import styled from 'styled-components';
import { HiOutlineTemplate, HiOutlineTable, HiOutlineUsers, HiOutlineLogout } from 'react-icons/hi';

import { flexBox } from '@styles/mixins';
import SiderItem from './SiderItem';

function Sider() {
  return (
    <Container>
      <Title>D. PREFACE</Title>
      <ul>
        <SiderItem name="대시보드" href="/" Icon={HiOutlineTemplate} />
        <SiderItem name="계좌 목록" href="/accounts" Icon={HiOutlineTable} />
        <SiderItem name="사용자 목록" href="/users" Icon={HiOutlineUsers} />
        <SiderItem name="로그아웃" href={null} Icon={HiOutlineLogout} />
      </ul>
    </Container>
  );
}

export default React.memo(Sider);

const Container = styled.div`
  grid-area: sider;
  background-color: ${({ theme }) => theme.NAVY};
`;

const Title = styled.div`
  ${flexBox()};
  width: 100%;
  height: 10vh;
  font-size: 2.5vw;
  color: white;
`;
