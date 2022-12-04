import { useEffect } from 'react';

import useHeaderTitleDispatch from '@hooks/useHeaderTitleDispatch';
import Seo from '@components/Layout/Seo';

export default function Dashboard() {
  const dispatchTitle = useHeaderTitleDispatch();

  useEffect(() => {
    dispatchTitle('대시보드');
  }, []);

  return (
    <div>
      <Seo title="D. PREFACE | 대시보드" />
      <h1>Dashboard</h1>
    </div>
  );
}
