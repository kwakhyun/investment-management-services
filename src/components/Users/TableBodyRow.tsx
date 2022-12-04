/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';

import BodyColumn from '@components/UI/BodyColumn';
import { User } from 'src/types/user';
import useParseUserData from '@hooks/useParseUserData';

type Props = {
  user: User;
};

function TableBodyRow({ user }: Props) {
  const parsedUser = useParseUserData({ user });
  return (
    <>
      {parsedUser.map((item) => {
        if (item.href && typeof item.href === 'string')
          return (
            <BodyColumn key={item.key} type="textBlue">
              <Link href={item.href}>
                <a>{item.content}</a>
              </Link>
            </BodyColumn>
          );

        if (typeof item.type !== 'number')
          return (
            <BodyColumn key={item.key} type={item.type}>
              {item.content}
            </BodyColumn>
          );

        return <BodyColumn key={item.key}>{item.content}</BodyColumn>;
      })}
    </>
  );
}

export default TableBodyRow;
