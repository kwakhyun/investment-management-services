import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { HiInformationCircle, HiOutlineX } from 'react-icons/hi';

import { flexBox, positionCenterX } from '@styles/mixins';
import { alertModalState, showModal, unshowModal } from '@store/modules/alertModalSlice';
import { useEffect } from 'react';

type Props = {
  isExpired: boolean;
};

function alertModal({ isExpired }: Props) {
  const { alertModal } = useSelector((state: { alertModal: alertModalState }) => state);
  const dispatch = useDispatch();

  const handleClick = () => dispatch(unshowModal());

  useEffect(() => {
    if (isExpired) dispatch(showModal('세션이 만료되어 재로그인이 필요합니다.'));
  }, [isExpired]);

  if (!alertModal.isOpen) return null;

  return (
    <Container>
      <HiInformationCircle />
      {alertModal.content}
      <HiOutlineX onClick={handleClick} />
    </Container>
  );
}

export default alertModal;

const Container = styled.div`
  ${positionCenterX()}
  top: -60px;
  ${flexBox()}
  width: 320px;
  height: 40px;
  background-color: ${({ theme }) => theme.YELLOW_BG};
  border: 1px solid ${({ theme }) => theme.YELLOW};
  border-radius: 5px;
  font-size: 14px;
  font-weight: 500;

  > svg:first-child {
    margin-right: 5px;
    color: ${({ theme }) => theme.YELLOW};
    font-size: 16px;
  }

  > svg:last-child {
    margin-left: 10px;
    color: ${({ theme }) => theme.GRAY_DARK};
    font-size: 18px;
    cursor: pointer;
  }
`;
