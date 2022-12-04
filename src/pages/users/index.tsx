import { GetServerSideProps } from 'next';
import axios, { AxiosError } from 'axios';

import UsersView from '@components/Users';
import { COOKIE_TOKEN_KEY, TOKEN_EXPIRED } from '@vo/CookieTokenRepository';
import type { User } from 'src/types/user';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import getQueryString from '@utils/getQueryString';
import UserService from '@services/UserService';

function Users() {
  return <UsersView />;
}

export default Users;

export const getServerSideProps: GetServerSideProps = async ({ req, res, query }) => {
  const token = req.cookies[COOKIE_TOKEN_KEY];
  const { page, limit, is_active: isActive = 'all', is_staff: isStaff = 'all', search = '' } = query;
  const initialQuery = { page: Number(page) || 1, limit: Number(limit) || 30, isActive, isStaff, search };
  const queryClient = new QueryClient();

  try {
    const { data, headers } = await axios.get<User>(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/users?${getQueryString(initialQuery, UserService.usersQueryConverter)}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const queryFn = () => Promise.resolve({ data, totalLength: Number(headers?.['x-total-count'] ?? 0) });
    await queryClient.prefetchQuery(['users', initialQuery], queryFn);
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
