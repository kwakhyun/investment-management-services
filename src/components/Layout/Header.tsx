import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { HiOutlineMenuAlt1, HiOutlineQuestionMarkCircle, HiOutlineBell } from 'react-icons/hi';

import { flexBox } from '@styles/mixins';

function Header() {
  const { headerTitle } = useSelector((state: { headerTitle: string }) => state);

  return (
    <Container>
      <Side>
        <HiOutlineMenuAlt1 />
        <span>{headerTitle}</span>
      </Side>

      <Side>
        <HiOutlineQuestionMarkCircle />
        <HiOutlineBell />
      </Side>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  ${flexBox('row', 'space-between')};
  grid-area: header;
  padding: 0 20px;
  background-color: white;
  box-shadow: 0 1px 3px ${({ theme }) => theme.GRAY_DARK};
  z-index: 3;
`;

const Side = styled.div`
  ${flexBox()}
  font-size: 18px;

  > svg {
    font-size: 22px;
  }

  > svg:first-child {
    margin-right: 10px;
  }
`;
