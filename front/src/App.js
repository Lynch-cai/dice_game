import logo from './logo.svg';
import './App.css';
import {GameTable} from './components/organisms/GameTable'
import {User} from './components/molecules/User'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GameTable/>
        <User diamond_content="?" first_content="Theotim" second_content="100 points"/>
      </header>
    </div>
  );
}

export default App;
