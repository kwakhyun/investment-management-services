import SigninView from '@components/signin';
import { COOKIE_TOKEN_KEY, TOKEN_EXPIRED } from '@vo/CookieTokenRepository';
import { GetServerSideProps } from 'next';

type Props = {
  isExpired: boolean;
};

function Signin({ isExpired }: Props) {
  return <SigninView isExpired={isExpired} />;
}

export default Signin;

// eslint-disable-next-line require-await
export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const token = req.cookies[COOKIE_TOKEN_KEY];
  if (token === TOKEN_EXPIRED) {
    res.setHeader('Set-Cookie', [`${COOKIE_TOKEN_KEY}=;max-age=-1; Path=/`]);
    return {
      props: {
        isExpired: true,
      },
    };
  }

  return { props: {} };
};
