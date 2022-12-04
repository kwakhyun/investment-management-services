import { useMemo } from 'react';

import { parseDate } from '@utils/parseDate';
import { TEXT_RIGHT } from '@components/UI/BodyColumn';
import { User } from 'src/types/user';
import { maskingName } from '@utils/maskingName';
import { maskingPhoneNum } from '@utils/maskingPhoneNum';

type Props = {
  user: User;
};

function useParseUserData({ user }: Props) {
  const parsedUser = useMemo(
    () => [
      { key: 'name', title: '고객명', content: maskingName(user.name), href: `/users/${user.uuid}` },
      { key: 'account_count', title: '보유계좌수', content: user.account_count },
      { key: 'email', title: '이메일', content: user.email, type: TEXT_RIGHT },
      {
        key: 'gender_origin',
        title: '성별',
        content: user.gender_origin === 1 || user.gender_origin === 3 ? '남' : '여',
      },
      { key: 'birth_date', title: '생년월일', content: parseDate(user.birth_date), type: TEXT_RIGHT },
      { key: 'phone_number', title: '휴대폰번호', content: maskingPhoneNum(user.phone_number), type: TEXT_RIGHT },
      { key: 'last_login', title: '최근로그인', content: parseDate(user.last_login), type: TEXT_RIGHT },
      { key: 'allow_marketing_push', title: '혜택수신동의', content: user.allow_marketing_push ? 'O' : 'X' },
      { key: 'is_active', title: '활성화여부', content: user.is_active ? '활성' : '비활성' },
      { key: 'created_at', title: '가입일', content: parseDate(user.created_at), type: TEXT_RIGHT },
      { key: 'is_staff', title: '임직원계좌', content: user.is_staff ? 'O' : 'X' },
    ],
    [user]
  );

  return parsedUser;
}

export default useParseUserData;
