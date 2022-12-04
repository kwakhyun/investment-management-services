import { flexBox } from '@styles/mixins';
import styled from 'styled-components';

function Footer() {
  return <Container>Copyright © December and Company Inc. </Container>;
}

export default Footer;

const Container = styled.div`
  ${flexBox()}
  width: 100%;
  height: 100px;
  background-color: ${({ theme }) => theme.GRAY_LIGHT};
`;
