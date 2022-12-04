import styled, { DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';

import { flexBox } from '@styles/mixins';

type Props = {
  children: React.ReactNode;
  style?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
};

function HeadColumn({ children, style }: Props) {
  return <Column customStyle={style}>{children}</Column>;
}

export default HeadColumn;

const Column = styled.th<{ customStyle?: FlattenInterpolation<ThemeProps<DefaultTheme>> }>`
  position: relative;
  ${flexBox()};
  padding: 10px 0;
  background-color: ${({ theme }) => theme.GRAY_MEDIUM};
  font-size: 12px;
  font-weight: 600;
  ${({ customStyle }) => customStyle}
`;
