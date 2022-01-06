import React from 'react';

import { Card } from '../components/organisms/Card';
import { Statistic } from '../components/molecules/Statistic';

export const StatsScreen = () => (
  <>
    <Card width="728" height="auto" title="Global statistic" button_type="none">
      <Statistic label_content={'Winner'} value={'Theotim'}></Statistic>
      <Statistic label_content={'Score to win'} value={'2000'}></Statistic>
      <Statistic label_content={'Longest turn'} value={'1000'}></Statistic>
      <Statistic label_content={'Biggest win in one turn'} value={'500'}></Statistic>
      <Statistic label_content={'Biggest lost in one turn'} value={'500'}></Statistic>
      <Statistic label_content={'Average score per turn'} value={'200'}></Statistic>
      <Statistic label_content={'Average lost score per turn'} value={'600'}></Statistic>
    </Card>

    <Card width="728" height="auto" title="Theotim statistic" button_type="none">
      <Statistic label_content={'Score'} value={'2000'}></Statistic>
      <Statistic label_content={'Full roll'} value={'3'}></Statistic>
      <Statistic label_content={'Total bonus score'} value={'2000'}></Statistic>
      <Statistic label_content={'Total lost score'} value={'2000'}></Statistic>
    </Card>
  </>
);
