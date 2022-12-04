import { flexBox } from '@styles/mixins';
import styled from 'styled-components';

type Props = {
  userId: string;
  onCancelClick: () => void;
  onDeleteClick: (id: string) => () => void;
};

function DeleteModal({ userId, onCancelClick, onDeleteClick }: Props) {
  return (
    <Container>
      <SubContainer>
        정말 삭제하시겠습니까?
        <ButtonContainer>
          <Button onClick={onCancelClick}>취소</Button>
          <DeleteButton onClick={onDeleteClick(userId)}>삭제</DeleteButton>
        </ButtonContainer>
      </SubContainer>
    </Container>
  );
}

export default DeleteModal;

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  ${flexBox()};
  background-color: rgba(248, 248, 248, 0.8);
  z-index: 10;
`;

const SubContainer = styled.div`
  ${flexBox('column', 'space-between')}
  width: 300px;
  height: 120px;
  padding: 20px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 0 8px ${({ theme }) => theme.GRAY_MEDIUM};
  font-size: 16px;
`;

const ButtonContainer = styled.div`
  ${flexBox('row', 'space-between')}
  width: 100%;
`;

const Button = styled.button`
  width: 48%;
  height: 40px;
  background-color: ${({ theme }) => theme.GRAY_MEDIUM};
  border-radius: 3px;
`;

const DeleteButton = styled(Button)`
  background-color: ${({ theme }) => theme.BLUE};
  color: white;
`;
