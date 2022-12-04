import { useEffect } from 'react';
import styled from 'styled-components';

import useHeaderTitleDispatch from '@hooks/useHeaderTitleDispatch';
import { Account } from 'src/types/account';
import Seo from '@components/Layout/Seo';
import Table from './Table';

type Props = {
  account: Account;
};

function AccountDetail({ account }: Props) {
  const dispatchTitle = useHeaderTitleDispatch();

  useEffect(() => {
    dispatchTitle('계좌 상세');
  }, []);

  return (
    <>
      <Seo title="D. PREFACE | 계좌 상세" />
      <Title>계좌 정보</Title>
      <Table account={account} />
    </>
  );
}

export default AccountDetail;

const Title = styled.h2`
  padding-bottom: 20px;
  font-size: 20px;
  font-weight: 700;
`;
