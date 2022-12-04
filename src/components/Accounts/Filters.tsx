import SelectBox from '@components/UI/SelectBox';
import useAccountQueryDispatch from '@hooks/useAccountQueryDispatch';
import useAccountQueryState from '@hooks/useAccountQueryState';
import { flexBox } from '@styles/mixins';
import { accountStatus, activity, brokers } from '@utils/const';
import { getSelectOptions } from '@utils/getSelectOptions';
import styled from 'styled-components';

function Filters() {
  const { dispatchPage, dispatchBrokerId, dispatchStatus, dispatchActivity } = useAccountQueryDispatch();
  const accountQuery = useAccountQueryState();
  const { brokerId, status, isActive } = accountQuery;

  const brokerOptions = getSelectOptions(brokers, '증권사(전체)');
  const accountStatusOptions = getSelectOptions(accountStatus, '운용상태(전체)');
  const accountActivityOptions = getSelectOptions(activity, '계좌상태(전체)');

  return (
    <Container>
      <SelectBox
        options={brokerOptions}
        handleSelectChange={dispatchBrokerId}
        dispatchPage={dispatchPage}
        value={brokerId}
      />
      <SelectBox
        options={accountStatusOptions}
        handleSelectChange={dispatchStatus}
        dispatchPage={dispatchPage}
        value={status}
      />
      <SelectBox
        options={accountActivityOptions}
        handleSelectChange={dispatchActivity}
        dispatchPage={dispatchPage}
        value={isActive}
      />
    </Container>
  );
}

export default Filters;

const Container = styled.div`
  ${flexBox()}
`;
