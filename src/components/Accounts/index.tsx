import styled from 'styled-components';

import useAccounts from '@hooks/useAccounts';
import Seo from '@components/Layout/Seo';
import SearchBar from '@components/UI/SearchBar';
import { flexBox } from '@styles/mixins';
import Table from './Table';
import Pagenation from './Pagenation';
import Filters from './Filters';

function Accounts() {
  const { page, limit, search, dispatchPage, dispatchSearch, data, totalLength } = useAccounts();

  return (
    <>
      <Seo title="D. PREFACE | 계좌 목록" />
      <FilterAndSearch>
        <Filters />
        <SearchBar search={search} dispatchSearch={dispatchSearch} dispatchPage={dispatchPage} />
      </FilterAndSearch>
      <Table accounts={data} />
      <Pagenation contents={data} totalLength={totalLength} page={page} limit={limit} dispatchPage={dispatchPage} />
    </>
  );
}

export default Accounts;

const FilterAndSearch = styled.div`
  ${flexBox('row', 'space-between')};
  margin-bottom: 10px;
`;
