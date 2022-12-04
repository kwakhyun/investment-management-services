import { GetServerSideProps } from 'next';
import axios, { AxiosError } from 'axios';

import AccountDetailView from '@components/AccountDetail';
import { COOKIE_TOKEN_KEY, TOKEN_EXPIRED } from '@vo/cookieTokenVo';
import { Account } from 'src/types/account';

type Props = {
  account: Account;
};

function AccountDetail({ account }: Props) {
  return <AccountDetailView account={account} />;
}

export default AccountDetail;

export const getServerSideProps: GetServerSideProps = async ({ params, req, res }) => {
  const token = req.cookies[COOKIE_TOKEN_KEY];
  const id = params?.accountId;
  let accountRes;

  try {
    accountRes = await axios.get<Account>(`${process.env.NEXT_PUBLIC_SERVER_URL}/accounts/${id}`, {
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

  return { props: { account: accountRes?.data } };
};
