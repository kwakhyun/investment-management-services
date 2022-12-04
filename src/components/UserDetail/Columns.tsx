import React, { useRef, useState } from 'react';
import styled, { css } from 'styled-components';

import HeadColumn from '@components/UI/HeadColumn';
import BodyColumn, { TEXT_RIGHT } from '@components/UI/BodyColumn';
import { User } from 'src/types/user';
import useUserNameEdit from '@hooks/useUserNameEdit';
import useParseUserDetailData from '@hooks/useParseUserDetailData';

type Props = {
  user: User;
};

function Columns({ user }: Props) {
  const [userData, setUserData] = useState(user);
  const inputRef = useRef<HTMLInputElement>(null);
  const { isEditMode, handleEditClick, handleEditCancle, handleSubmitClick } = useUserNameEdit(
    inputRef,
    userData,
    setUserData
  );
  const parsedUser = useParseUserDetailData(userData);

  return (
    <>
      {parsedUser?.map(({ key, title, content }) => {
        if (key === 'user_name')
          return (
            <React.Fragment key={key}>
              <HeadColumn style={ColumnStyle}>
                {title}
                {isEditMode && <CancleButton onClick={handleEditCancle}>취소</CancleButton>}
                <Button onClick={isEditMode ? handleSubmitClick : handleEditClick}>
                  {isEditMode ? '확인' : '편집'}
                </Button>
              </HeadColumn>

              <BodyColumn style={ColumnStyle} type={TEXT_RIGHT}>
                {isEditMode ? <Input ref={inputRef} defaultValue={content} /> : content}
              </BodyColumn>
            </React.Fragment>
          );

        return (
          <React.Fragment key={key}>
            <HeadColumn style={ColumnStyle}>{title}</HeadColumn>
            <BodyColumn style={ColumnStyle} type={TEXT_RIGHT}>
              {content}
            </BodyColumn>
          </React.Fragment>
        );
      })}
    </>
  );
}

export default Columns;

const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 5px;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.BLUE};
  text-align: right;
`;

const Button = styled.button`
  position: absolute;
  right: 3px;
  bottom: 3px;
  padding: 3px;
  border-radius: 3px;
  border: 1px solid ${({ theme }) => theme.BLUE};
  font-size: 10px;
  line-height: 10px;
  color: ${({ theme }) => theme.BLUE};
`;

const CancleButton = styled(Button)`
  right: 30px;
  border: 1px solid ${({ theme }) => theme.GRAY_DARK};
  color: ${({ theme }) => theme.GRAY_DARK};
`;

const ColumnStyle = css`
  font-size: 15px;
  line-height: 20px;
`;
