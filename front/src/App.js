import './App.css';
import { GameTable } from './components/organisms/GameTable';
import { User } from './components/molecules/User';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GameTable />
        <User diamond_content="1" first_content="Theotim" second_content="100 points" />
        <User diamond_content="2" first_content="Theotim" second_content="100 points" />
        <User diamond_content="3" first_content="Theotim" second_content="100 points" />
        <User diamond_content="4" first_content="Theotim" second_content="100 points" />
      </header>
    </div>
  );
}

export default App;
