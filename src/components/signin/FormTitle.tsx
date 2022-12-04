import styled from 'styled-components';
import { IconType } from 'react-icons';

import { flexBox } from '@styles/mixins';

type Props = {
  children: React.ReactNode;
  Icon: IconType;
};

function FormTitle({ children, Icon }: Props) {
  return (
    <Container>
      <Icon />
      {children}
    </Container>
  );
}

export default FormTitle;

const Container = styled.div`
  ${flexBox('row', 'flex-start')}
  width: 100%;
  height: 50px;
  padding: 20px;
  background-color: ${({ theme }) => theme.GRAY_LIGHT};

  > svg {
    transform: translateY(-1px);
    margin-right: 8px;
    font-size: 18px;
  }
`;
