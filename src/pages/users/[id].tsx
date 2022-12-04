import { GetServerSideProps } from 'next';
import axios, { AxiosError } from 'axios';

import { COOKIE_TOKEN_KEY, TOKEN_EXPIRED } from '@vo/CookieTokenRepository';
import { User } from 'src/types/user';
import { Account } from 'src/types/account';
import UserDetailView from '@components/UserDetail';

type Props = {
  user: User;
  accounts: Account[];
};

function UserDetail({ user, accounts }: Props) {
  return <UserDetailView user={user} accounts={accounts} />;
}

export default UserDetail;

export const getServerSideProps: GetServerSideProps = async ({ params, req, res }) => {
  const token = req.cookies[COOKIE_TOKEN_KEY];
  const id = params?.userId;
  let userRes;
  let accountsRes;

  try {
    userRes = await axios.get<User>(`${process.env.NEXT_PUBLIC_SERVER_URL}/users/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    accountsRes = await axios.get<User>(`${process.env.NEXT_PUBLIC_SERVER_URL}/accounts?user_id=${userRes.data.uuid}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
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

  return { props: { user: userRes?.data, accounts: accountsRes?.data } };
};
