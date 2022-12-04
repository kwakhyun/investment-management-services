import styled from 'styled-components';
import { HiOutlineSearch } from 'react-icons/hi';
import React, { useEffect, useRef } from 'react';

import { flexBox } from '@styles/mixins';

type Props = {
  search: string;
  dispatchSearch: (search: string) => void;
  dispatchPage: (page: number) => void;
};

function SearchBar({ search, dispatchSearch, dispatchPage }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInitClick = () => {
    dispatchSearch('');
    if (inputRef.current) {
      if (inputRef.current.value) {
        dispatchPage(1);
      }
      inputRef.current.value = '';
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRef.current) {
      dispatchSearch(inputRef.current.value);
      dispatchPage(1);
      inputRef.current.value = '';
    }
  };

  useEffect(() => {
    if (inputRef.current && typeof search === 'string') {
      inputRef.current.value = search;
    }
  }, [search, inputRef]);

  return (
    <Form onSubmit={handleSubmit}>
      <ButtonOutlined type="button" onClick={handleInitClick}>
        초기화
      </ButtonOutlined>
      <Input ref={inputRef} placeholder="검색어를 입력해주세요." />
      <Button type="submit">
        <HiOutlineSearch />
      </Button>
    </Form>
  );
}

export default SearchBar;

const Form = styled.form`
  ${flexBox()};
`;

const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.GRAY_DARK};
  width: 300px;
  height: 30px;
  padding: 5px;
  font-size: 14px;
`;

const Button = styled.button`
  ${flexBox()}
  width: 30px;
  height: 30px;
`;

const ButtonOutlined = styled(Button)`
  width: 50px;
  margin-right: 5px;
  border: 1px solid ${({ theme }) => theme.GRAY_DARK};
  border-radius: 3px;
  font-size: 13px;
`;
