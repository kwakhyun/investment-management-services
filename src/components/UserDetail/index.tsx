import React, { useEffect } from 'react';
import styled from 'styled-components';

import { User } from 'src/types/user';
import { Account } from 'src/types/account';
import useHeaderTitleDispatch from '@hooks/useHeaderTitleDispatch';
import useDeleteModal from '@hooks/useDeleteModal';
import Table from '@components/Accounts/Table';
import { flexBox } from '@styles/mixins';
import UserService from '@services/UserService';
import Seo from '@components/Layout/Seo';
import UserInfoTable from './UserInfoTable';
import DeleteModal from './DeleteModal';

type Props = {
  user: User;
  accounts: Account[];
};

function UserDetail({ user, accounts }: Props) {
  const dispatchTitle = useHeaderTitleDispatch();
  const { isOpenModal, handleOpenModal, handleCancelModal, handleDelete } = useDeleteModal(UserService.deleteUser);

  useEffect(() => {
    dispatchTitle(`${user.name}의 계좌 목록`);
  }, []);
  return (
    <>
      <Seo title={`D. PREFACE | ${user.name}`} />
      {isOpenModal && <DeleteModal userId={user.uuid} onCancelClick={handleCancelModal} onDeleteClick={handleDelete} />}
      <Title>사용자 정보</Title>
      <UserInfoTable user={user} />
      <SubTitle>증권 계좌 목록</SubTitle>
      <Table accounts={accounts} />
      <ButtonContainer>
        <Button onClick={handleOpenModal}>사용자 삭제</Button>
      </ButtonContainer>
    </>
  );
}

export default UserDetail;

const Title = styled.h2`
  padding-bottom: 20px;
  font-size: 20px;
  font-weight: 700;
`;

const SubTitle = styled.h3`
  margin-top: 25px;
  padding: 15px 10px;
  font-weight: 700;
`;

const ButtonContainer = styled.div`
  ${flexBox('row', 'flex-end')}
  padding-top: 30px
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.RED};
  border-radius: 5px;
  color: ${({ theme }) => theme.RED};
`;
