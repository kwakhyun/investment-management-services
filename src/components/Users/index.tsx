import styled from 'styled-components';

import useUsers from '@hooks/useUsers';
import Pagenation from '@components/Accounts/Pagenation';
import Seo from '@components/Layout/Seo';
import SearchBar from '@components/UI/SearchBar';
import { flexBox } from '@styles/mixins';
import Table from './Table';
import Filters from './Filters';

function Users() {
  const { page, limit, search, dispatchPage, dispatchSearch, data, totalLength } = useUsers();

  return (
    <>
      <Seo title="D. PREFACE | 사용자 목록" />
      <FilterAndSearch>
        <Filters />
        <SearchBar search={search} dispatchSearch={dispatchSearch} dispatchPage={dispatchPage} />
      </FilterAndSearch>
      <Table users={data} />
      <Pagenation contents={data} totalLength={totalLength} page={page} limit={limit} dispatchPage={dispatchPage} />
    </>
  );
}

export default Users;

const FilterAndSearch = styled.div`
  ${flexBox('row', 'space-between')}
  margin-bottom: 10px;
`;
