import styled, { DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  style?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
};

function Input({ style, type, placeholder, value, onChange }: Props) {
  return <StyledInput value={value} onChange={onChange} type={type} placeholder={placeholder} customStyle={style} />;
}

export default Input;

const StyledInput = styled.input<{ customStyle: FlattenInterpolation<ThemeProps<DefaultTheme>> | undefined }>`
  border: 1px solid ${({ theme }) => theme.GRAY_DARK};
  width: 100%;
  height: 40px;
  padding: 10px;
  font-size: 16px;
  ${({ customStyle }) => customStyle};
`;
