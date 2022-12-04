import HeadColumn from '@components/UI/HeadColumn';

function TableHeadRow() {
  return (
    <>
      <HeadColumn>증권사</HeadColumn>
      <HeadColumn>계좌번호</HeadColumn>
      <HeadColumn>고객명</HeadColumn>
      <HeadColumn>운용상태</HeadColumn>
      <HeadColumn>계좌명</HeadColumn>
      <HeadColumn>평가금액</HeadColumn>
      <HeadColumn>입금금액</HeadColumn>
      <HeadColumn>계좌상태</HeadColumn>
      <HeadColumn>계좌개설일</HeadColumn>
    </>
  );
}

export default TableHeadRow;
