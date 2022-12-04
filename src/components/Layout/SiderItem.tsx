/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { IconType } from 'react-icons/lib';

import { flexBox } from '@styles/mixins';
import useSignout from '@hooks/useSignout';
import React from 'react';

type Props = { name: string; href: string | null; Icon: IconType };

function SiderItem({ name, href, Icon }: Props) {
  const { pathname } = useRouter();
  const handleSignoutClick = useSignout();
  const isSelected = pathname === '/' ? pathname === href : href?.startsWith(`/${pathname.split('/')[1]}`);

  if (href)
    return (
      <Container isSelected={isSelected}>
        <Link href={href}>
          <a>
            <Icon />
            <span>{name}</span>
          </a>
        </Link>
      </Container>
    );

  return (
    <Container onClick={handleSignoutClick}>
      <a>
        <Icon />
        <span>{name}</span>
      </a>
    </Container>
  );
}

export default React.memo(SiderItem);

const Container = styled.li<{ isSelected?: boolean }>`
  padding: 15px 20px;
  background-color: ${({ theme, isSelected }) => (isSelected ? theme.BLUE : 'none')};
  color: ${({ theme, isSelected }) => (isSelected ? 'white' : theme.GRAY_DARK)};

  a {
    ${flexBox('row', 'flex-start')}
    font-size: 16px;

    svg {
      margin-right: 10px;
      font-size: 24px;
    }
  }
`;
