import HeadColumn from '@components/UI/HeadColumn';

function TableHeadRow() {
  return (
    <>
      <HeadColumn>고객명</HeadColumn>
      <HeadColumn>보유계좌수</HeadColumn>
      <HeadColumn>이메일</HeadColumn>
      <HeadColumn>성별</HeadColumn>
      <HeadColumn>생년월일</HeadColumn>
      <HeadColumn>휴대폰번호</HeadColumn>
      <HeadColumn>최근로그인</HeadColumn>
      <HeadColumn>혜택수신동의</HeadColumn>
      <HeadColumn>활성화여부</HeadColumn>
      <HeadColumn>가입일</HeadColumn>
      <HeadColumn>임직원계좌</HeadColumn>
    </>
  );
}

export default TableHeadRow;
