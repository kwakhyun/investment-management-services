import { useMemo } from 'react';

import useUserQueryState from './useUserQueryState';

function useUserURL() {
  const { isActive, isStaff, page, limit, search } = useUserQueryState();

  return useMemo(() => {
    const queries = [`_page=${page}`, `_limit=${limit}`];

    if (!(isActive === 'all')) queries.push(`is_active=${isActive}`);
    if (!(isStaff === 'all')) queries.push(`is_staff=${isStaff}`);
    if (search) queries.push(`q=${search}`);

    return `/users?${queries.join('&')}`;
  }, [isActive, isStaff, page, limit, search]);
}

export default useUserURL;
