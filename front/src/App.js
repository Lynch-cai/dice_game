import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { SettingScreen } from './views/SettingScreen';
import { StatsScreen } from './views/StatsScreen';
import { GameScreen } from './views/GameScreen';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/settings" element={<SettingScreen />} />
          <Route path="/fun" element={<GameScreen />} />
          <Route path="/stats" element={<StatsScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
