import { flexBox } from '@styles/mixins';
import styled from 'styled-components';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';

import { Account } from 'src/types/account';
import { User } from 'src/types/user';
import { PER_PAGE } from '@utils/const';

type Props = {
  contents: Account[] | User[];
  totalLength: number;
  page: number;
  limit: number;
  dispatchPage: (page: number) => void;
};

function Pagenation({ contents, totalLength, page, limit, dispatchPage }: Props) {
  const handlePrevClick = () => dispatchPage(page - 1);
  const handleNextClick = () => dispatchPage(page + 1);
  const handleTargetClick = (targetPage: number) => dispatchPage(targetPage);
  const totalPage = Math.ceil(Number(totalLength) / limit);

  const generatePages = () => {
    let startPage = (page - 1) / PER_PAGE;
    startPage = Math.floor(startPage) * PER_PAGE + 1;
    return new Array(5)
      .fill(null)
      .map((_, i) => i + startPage)
      .filter((item) => item <= totalPage);
  };

  return (
    <Container>
      <Button disabled={page === 1} onClick={handlePrevClick}>
        <HiOutlineChevronLeft />
      </Button>

      {generatePages().map((i: number) => (
        <Page key={i} onClick={() => handleTargetClick(i)} className={i === page ? ' active' : ''}>
          {i}
        </Page>
      ))}

      <Button disabled={contents.length < limit} onClick={handleNextClick}>
        <HiOutlineChevronRight />
      </Button>
    </Container>
  );
}

export default Pagenation;

const Container = styled.div`
  ${flexBox('row', 'flex-end')}
  width: 100%;
  padding: 10px 5px;
`;

const Button = styled.button<{ disabled: boolean }>`
  font-size: 25px;
  color: ${({ disabled, theme }) => (disabled ? theme.GRAY_DARK : theme.NAVY)};
`;

const Page = styled.button`
  padding: 0 20px;
  font-size: 20px;

  &.active {
    font-weight: bold;
    color: ${({ theme }) => theme.BLUE};
  }
`;
