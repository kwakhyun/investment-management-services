import React from 'react';
import styled from 'styled-components';

import { Account } from 'src/types/account';
import Columns from './Columns';

type Props = {
  account: Account;
};

function Table({ account }: Props) {
  return (
    <Container>
      <tbody>
        <Row>
          <Columns account={account} />
        </Row>
      </tbody>
    </Container>
  );
}

export default Table;

const Container = styled.table`
  position: relative;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.GRAY_BG};
  border-bottom: none;
`;

const Row = styled.tr`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 2fr 1fr 2fr;
  grid-template-rows: 80px 80px 80px;
  grid-gap: 1px;
  background-color: ${({ theme }) => theme.GRAY_BG};

  &:first-child {
    border-bottom: 1px solid ${({ theme }) => theme.GRAY_BG};
  }
`;
