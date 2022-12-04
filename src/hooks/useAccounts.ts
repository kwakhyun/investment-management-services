import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';

import AccountsService from '@services/AccountService';
import useHeaderTitleDispatch from './useHeaderTitleDispatch';
import useAccountQueryState from './useAccountQueryState';
import useAccountQueryDispatch from './useAccountQueryDispatch';

function useAccounts() {
  const [enabled, setEnabled] = useState(false);
  const router = useRouter();
  const accountQuery: Record<string, unknown> = useAccountQueryState();
  const { dispatchPage, dispatchLimit, dispatchBrokerId, dispatchStatus, dispatchActivity, dispatchSearch } =
    useAccountQueryDispatch();
  const dispatchTitle = useHeaderTitleDispatch();

  const { data } = useQuery(['accounts', accountQuery], () => AccountsService.getAccounts(accountQuery), {
    ...AccountsService.accountsQueryOptions,
    enabled,
  });

  useEffect(() => {
    dispatchTitle('계좌 목록');
  }, []);

  useEffect(() => {
    const { page = 1, limit = 30, brokerId = 'all', status = 'all', isActive = 'all', search = '' } = router.query;
    dispatchPage(Number(page));
    dispatchLimit(Number(limit));
    dispatchBrokerId(String(brokerId));
    dispatchStatus(String(status));
    dispatchActivity(String(isActive));
    dispatchSearch(String(search ?? ''));
    setEnabled(true);
  }, [router.query]);

  return {
    page: Number(accountQuery.page),
    limit: Number(accountQuery.limit),
    search: String(accountQuery.search),
    dispatchPage,
    dispatchSearch,
    data: data?.totalLength ? data?.data ?? [] : [],
    totalLength: data?.totalLength ?? 0,
  };
}

export default useAccounts;
