import SelectBox from '@components/UI/SelectBox';
import useUserQueryDispatch from '@hooks/useUserQueryDispatch';
import useUserQueryState from '@hooks/useUserQueryState';
import { flexBox } from '@styles/mixins';
import { activity, staff } from '@utils/const';
import { getSelectOptions } from '@utils/getSelectOptions';
import styled from 'styled-components';

function Filters() {
  const { dispatchPage, dispatchIsActive, dispatchIsStaff } = useUserQueryDispatch();
  const { isActive, isStaff } = useUserQueryState();

  const brokerOptions = getSelectOptions(staff, '임직원계좌(전체)');
  const userIsActiveOptions = getSelectOptions(activity, '활성화여부(전체)');

  return (
    <Container>
      <SelectBox
        options={userIsActiveOptions}
        handleSelectChange={dispatchIsActive}
        dispatchPage={dispatchPage}
        value={isActive}
      />
      <SelectBox
        options={brokerOptions}
        handleSelectChange={dispatchIsStaff}
        dispatchPage={dispatchPage}
        value={isStaff}
      />
    </Container>
  );
}

export default Filters;

const Container = styled.div`
  ${flexBox()}
`;
