import UserService from '@services/UserService';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useHeaderTitleDispatch from './useHeaderTitleDispatch';
import useUserQueryDispatch from './useUserQueryDispatch';
import useUserQueryState from './useUserQueryState';

function useUsers() {
  const [enabled, setEnabled] = useState(false);
  const router = useRouter();
  const userQuery: Record<string, unknown> = useUserQueryState();
  const { dispatchPage, dispatchLimit, dispatchIsActive, dispatchIsStaff, dispatchSearch } = useUserQueryDispatch();
  const dispatchTitle = useHeaderTitleDispatch();

  const { data } = useQuery(['users', userQuery], () => UserService.getUsers(userQuery), {
    ...UserService.usersQueryOptions,
    enabled,
  });

  useEffect(() => {
    dispatchTitle('사용자 목록');
  }, []);

  useEffect(() => {
    const { page = 1, limit = 30, isActive = 'all', isStaff = 'all', search = '' } = router.query;
    dispatchPage(Number(page));
    dispatchLimit(Number(limit));
    dispatchIsActive(String(isActive));
    dispatchIsStaff(String(isStaff));
    dispatchSearch(String(search ?? ''));
    setEnabled(true);
  }, [router.query]);

  return {
    page: Number(userQuery.page),
    limit: Number(userQuery.limit),
    search: String(userQuery.search),
    dispatchPage,
    dispatchSearch,
    data: data?.totalLength ? data?.data ?? [] : [],
    totalLength: data?.totalLength ?? 0,
  };
}

export default useUsers;
