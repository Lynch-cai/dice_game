import './App.css';
import React, { Children } from 'react';
import { GameTable } from './components/organisms/GameTable';
import { User } from './components/molecules/User';
import { Button } from './components/atoms/Button';
import { Input } from './components/atoms/Input';
import { Card } from './components/organisms/Card';
import { Statistic } from './components/molecules/Statistic';
import { InputContainer } from './components/molecules/InputContainer';
import { Roll } from './components/molecules/Roll';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GameTable />

        <Card width="360" height="572" title="Setting" button_type="secondary" button_content="Apply">
          <InputContainer label_content="score to win" input_default_value="2000" />
          <InputContainer label_content="bonus x" input_default_value="100" />
          <InputContainer label_content="bonux ace x" input_default_value="1000" />
          <Roll label_content="total roll" />
        </Card>

        <Card width="360" height="572" title="Players" button_type="secondary" button_content="Add player">
          <User diamond_content="1" first_content="Player 1" second_content="remove" in_game="false" turn="false" />
          <User diamond_content="2" first_content="Player 2" second_content="remove" in_game="false" turn="false" />
          <User diamond_content="3" first_content="Player 3" second_content="remove" in_game="false" turn="false" />
          <User diamond_content="4" first_content="Player 4" second_content="remove" in_game="false" turn="false" />
        </Card>

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
      </header>
    </div>
  );
}

export default App;
