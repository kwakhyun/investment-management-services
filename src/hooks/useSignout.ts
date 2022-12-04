import { useRouter } from 'next/router';

import CookieToken from '@vo/cookieTokenVo';

function useSignout() {
  const router = useRouter();

  const handleSignout = () => {
    CookieToken.remove();
    router.replace('/signin');
  };

  return handleSignout;
}

export default useSignout;
