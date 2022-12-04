import { useMemo } from 'react';

import useAccountQueryState from '@hooks/useAccountQueryState';

function useAccountURL() {
  const { brokerId, status, isActive, page, limit, search } = useAccountQueryState();

  return useMemo(() => {
    const queries = [`_page=${page}`, `_limit=${limit}`];

    if (!(brokerId === 'all')) queries.push(`broker_id=${brokerId}`);
    if (!(status === 'all')) queries.push(`status=${status}`);
    if (!(isActive === 'all')) queries.push(`is_active=${isActive}`);
    if (search) queries.push(`q=${search}`);

    return `/accounts?${queries.join('&')}`;
  }, [brokerId, status, isActive, page, limit, search]);
}

export default useAccountURL;
