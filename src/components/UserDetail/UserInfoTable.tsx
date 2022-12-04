import React from 'react';
import styled from 'styled-components';

import { User } from 'src/types/user';
import Columns from './Columns';

type Props = {
  user: User;
};

function UserInfoTable({ user }: Props) {
  return (
    <Container>
      <tbody>
        <Row>
          <Columns user={user} />
        </Row>
      </tbody>
    </Container>
  );
}

export default UserInfoTable;

const Container = styled.table`
  position: relative;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.GRAY_BG};
  border-bottom: none;
`;

const Row = styled.tr`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 2fr 1fr 2fr;
  grid-template-rows: 80px 120px 80px;
  grid-gap: 1px;
  background-color: ${({ theme }) => theme.GRAY_BG};

  &:first-child {
    border-bottom: 1px solid ${({ theme }) => theme.GRAY_BG};
  }
`;
