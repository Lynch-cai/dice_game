import logo from './logo.svg';
import './App.css';
import { GameTable } from './components/organisms/GameTable';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GameTable />
      </header>
    </div>
  );
}

export default App;
