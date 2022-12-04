import React from 'react';
import styled from 'styled-components';

import { Account } from 'src/types/account';
import TableBodyRow from '@components/Accounts/TableBodyRow';
import useMount from '@hooks/useMount';
import TableHeadRow from './TableHeadRow';

type Props = {
  accounts: Account[];
};

function Table({ accounts }: Props) {
  const isMount = useMount();

  return (
    <Container>
      <TableHead>
        <Row>
          <TableHeadRow />
        </Row>
      </TableHead>
      <TableBody>
        {isMount || <tr />}
        {accounts.map((account) => (
          <Row key={account.uuid}>
            <TableBodyRow account={account} />
          </Row>
        ))}
      </TableBody>
    </Container>
  );
}

export default Table;

const Container = styled.table`
  position: relative;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.GRAY_BG};
  border-collapse: collapse;
  border-bottom: none;
`;

const TableHead = styled.thead`
  position: sticky;
  top: 0;
  z-index: 2;
`;

const TableBody = styled.tbody`
  & > tr {
    border-bottom: 1px solid ${({ theme }) => theme.GRAY_BG};
  }
`;

const Row = styled.tr`
  display: grid;
  grid-template-columns: 2fr 2fr 1.5fr 1.5fr 2fr 2fr 2fr 1.5fr 2fr;
  grid-gap: 1px;
  background-color: ${({ theme }) => theme.GRAY_BG};

  &:first-child {
    border-bottom: 1px solid ${({ theme }) => theme.GRAY_BG};
  }
`;
