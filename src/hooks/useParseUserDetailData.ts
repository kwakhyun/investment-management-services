import { useMemo } from 'react';

import { User } from 'src/types/user';
import { maskingPhoneNum } from '@utils/maskingPhoneNum';
import { parseDate } from '@utils/parseDate';
import { parseDateTime } from '@utils/parseDateTime';

function useParseUserDetailData(userData: User) {
  const parsedUser = useMemo(
    () => [
      { key: 'user_name', title: '이름', content: userData.name },
      {
        key: 'gender_origin',
        title: '성별',
        content: userData.gender_origin === 1 || userData.gender_origin === 3 ? '남' : '여',
      },
      { key: 'birth_date', title: '생년월일', content: parseDate(userData.birth_date) },
      { key: 'address', title: '주소', content: `${userData.address} ${userData.detail_address}` },
      { key: 'email', title: '이메일', content: userData.email },
      { key: 'phone_number', title: '휴대폰번호', content: maskingPhoneNum(userData.phone_number) },
      { key: 'allow_marketing_push', title: '혜택 정보 수신', content: userData.allow_marketing_push ? 'O' : 'X' },
      { key: 'last_login', title: '최근 로그인', content: parseDateTime(userData.last_login) },
      { key: 'created_at', title: '가입 시각', content: parseDateTime(userData.created_at) },
    ],
    [userData]
  );
  return parsedUser;
}

export default useParseUserDetailData;
