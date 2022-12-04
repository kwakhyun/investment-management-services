import styled from 'styled-components';
import { IconType } from 'react-icons/lib';

import { flexBox } from '@styles/mixins';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  Icon: IconType;
  isValid: boolean;
};

function Button({ children, Icon, type, isValid }: Props) {
  return (
    <StyledButton type={type} isValid={isValid} disabled={!isValid}>
      <Icon />
      {children}
    </StyledButton>
  );
}

export default Button;

const StyledButton = styled.button<{ isValid: boolean }>`
  ${flexBox()}
  width: 100%;
  height: 45px;
  background-color: ${({ theme, isValid }) => (isValid ? theme.NAVY : theme.GRAY_MEDIUM)};
  border: 1px solid ${({ theme, isValid }) => (isValid ? theme.NAVY : theme.GRAY_DARK)};
  font-size: 16px;
  color: ${({ theme, isValid }) => (isValid ? 'white' : theme.GRAY_DARK)};
  transition: all 200ms;

  > svg {
    transform: translateY(-1px);
    margin-right: 8px;
    font-size: 18px;
  }
`;
