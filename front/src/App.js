import './App.css';
import { GameTable } from './components/organisms/GameTable';
import { User } from './components/molecules/User';
import { Button } from './components/atoms/Button';
import { Input } from './components/atoms/Input';
import { SectionPlayer } from './components/organisms/SectionPlayer';
import { SectionSetting } from './components/organisms/SectionSetting';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GameTable />
        {/* <User
          diamond_content="1"
          first_content="Theotim"
          second_content="100 points"
          in_game="true"
          turn="true"
        />
        <Button content="Start" type="secondary" />
        <Button content="Start" type="primary" />
        <Input default_value="123456789123456789" type="secondary" />
        <Input default_value="999999" type="primary" />
        <SectionPlayer />
        <SectionSetting /> */}
      </header>
    </div>
  );
}

export default App;
