import { useMemo } from 'react';

import { Account } from 'src/types/account';
import { accountStatus, brokers } from '@utils/const';
import { parseDate } from '@utils/parseDate';
import { TEXT_RIGHT } from '@components/UI/BodyColumn';
import { parseAccountNumber } from '@utils/parseAccountNumber';

type Props = {
  account: Account;
};

function useParseAccountData({ account }: Props) {
  const parsedAccount = useMemo(
    () => [
      { key: 'broker_id', title: '증권사', content: brokers[account.broker_id] },
      {
        key: 'number',
        title: '계좌번호',
        content: parseAccountNumber(account.number),
        href: `/accounts/${account.uuid}`,
      },
      { key: 'user_id', title: '고객명', content: account.user_name, href: `/users/${account.user_id}` },
      { key: 'status', title: '운용상태', content: accountStatus[account.status] },
      { key: 'name', title: '계좌명', content: account.name },
      { key: 'assets', title: '평가금액', content: Number(account.assets).toLocaleString(), type: TEXT_RIGHT },
      { key: 'payments', title: '입금금액', content: Number(account.payments).toLocaleString(), type: TEXT_RIGHT },
      { key: 'is_active', title: '계좌상태', content: account.is_active ? '활성' : '비활성' },
      { key: 'created_at', title: '계좌개설일', content: parseDate(account.created_at), type: TEXT_RIGHT },
    ],
    [account]
  );

  return parsedAccount;
}

export default useParseAccountData;
