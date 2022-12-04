import { useDispatch } from 'react-redux';
import { setBrokerId, setIsActive, setLimit, setPage, setStatus, setSearch } from '@store/modules/accountQuerySlice';
import setQueryParams from '@utils/setQueryParams';

function useAccountQueryDispatch() {
  const dispatch = useDispatch();

  const dispatchBrokerId = (brokerId: string) => {
    dispatch(setBrokerId(brokerId));
    setQueryParams({ broker_id: brokerId });
  };

  const dispatchStatus = (status: string) => {
    dispatch(setStatus(status));
    setQueryParams({ status });
  };

  const dispatchActivity = (isActive: string) => {
    dispatch(setIsActive(isActive));
    setQueryParams({ is_active: isActive });
  };

  const dispatchPage = (page: number) => {
    dispatch(setPage(page));
    setQueryParams({ page });
  };

  const dispatchSearch = (search: string) => {
    dispatch(setSearch(search.trim()));
    setQueryParams({ search: search.trim() });
  };

  const dispatchLimit = (limit: number) => {
    dispatch(setLimit(limit));
    setQueryParams({ limit });
  };

  return { dispatchBrokerId, dispatchStatus, dispatchActivity, dispatchPage, dispatchLimit, dispatchSearch };
}

export default useAccountQueryDispatch;
