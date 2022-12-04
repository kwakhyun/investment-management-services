import { GetServerSideProps } from 'next';
import axios, { AxiosError } from 'axios';

import AccountsView from '@components/Accounts';
import { Account } from 'src/types/account';
import { COOKIE_TOKEN_KEY, TOKEN_EXPIRED } from '@vo/cookieTokenVo';
import getQueryString from '@utils/getQueryString';
import AccountsService from '@services/AccountService';
import { dehydrate, QueryClient } from '@tanstack/react-query';

function Accounts() {
  return <AccountsView />;
}

export default Accounts;

export const getServerSideProps: GetServerSideProps = async ({ req, res, query }) => {
  const token = req.cookies[COOKIE_TOKEN_KEY];
  const { page, limit, broker_id: brokerId = 'all', status = 'all', is_active: isActive = 'all', search = '' } = query;
  const initialQuery = { page: Number(page) || 1, limit: Number(limit) || 30, brokerId, status, isActive, search };
  const queryClient = new QueryClient();

  try {
    const { data, headers } = await axios.get<Account[]>(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/accounts?${getQueryString(
        initialQuery,
        AccountsService.accountsQueryConverter
      )}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const queryFn = () => Promise.resolve({ data, totalLength: Number(headers?.['x-total-count'] ?? 0) });
    await queryClient.prefetchQuery(['accounts', initialQuery], queryFn);
  } catch (error) {
    if (error instanceof AxiosError && error.response?.status === 401) {
      res.setHeader('Set-Cookie', [`${COOKIE_TOKEN_KEY}=${TOKEN_EXPIRED}; Path=/`]);
      return {
        redirect: {
          destination: '/signin',
        },
        props: {},
      };
    }
  }

  return {
    props: { dehydratedState: dehydrate(queryClient) },
  };
};
