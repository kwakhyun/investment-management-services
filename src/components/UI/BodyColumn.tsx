import styled, { DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';

import { flexBox } from '@styles/mixins';

export const TEXT_RIGHT = 'textRight';
export const TEXT_BLUE = 'textBlue';

type Props = {
  children: React.ReactNode;
  type?: string;
  style?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
};

function BodyColumn({ children, type, style }: Props) {
  if (type === TEXT_RIGHT) return <ColumnTextRight customStyle={style}>{children}</ColumnTextRight>;
  if (type === TEXT_BLUE) return <ColumnTextBlue customStyle={style}>{children}</ColumnTextBlue>;

  return <Column customStyle={style}>{children}</Column>;
}

export default BodyColumn;

const Column = styled.td<{ customStyle?: FlattenInterpolation<ThemeProps<DefaultTheme>> }>`
  position: relative;
  ${flexBox()};
  padding: 10px;
  background-color: white;
  font-size: 12px;
  border-top: none;
  ${({ customStyle }) => customStyle};
`;

const ColumnTextRight = styled(Column)`
  ${flexBox('row', 'flex-end')};
  text-align: right;
  ${({ customStyle }) => customStyle};
`;

const ColumnTextBlue = styled(ColumnTextRight)`
  color: ${({ theme }) => theme.BLUE};
  > span {
    cursor: pointer;
  }
  ${({ customStyle }) => customStyle};
`;
