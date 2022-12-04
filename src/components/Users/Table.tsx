import React from 'react';
import styled from 'styled-components';

import type { User } from 'src/types/user';
import useMount from '@hooks/useMount';
import TableHeadRow from './TableHeadRow';
import TableBodyRow from './TableBodyRow';

type Props = {
  users: User[];
};

function Table({ users }: Props) {
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
        <Row>
          {users.map((user) => (
            <TableBodyRow key={user.uuid} user={user} />
          ))}
        </Row>
      </TableBody>
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
  grid-template-columns: 1.5fr 0.8fr 1.5fr 0.5fr 1fr 1.5fr 1fr 0.8fr 1fr 1fr 1fr;
  grid-gap: 1px;
  background-color: ${({ theme }) => theme.GRAY_BG};

  &:first-child {
    border-bottom: 1px solid ${({ theme }) => theme.GRAY_BG};
  }
`;
