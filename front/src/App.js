import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { GameScreen } from './views/GameScreen';
import { StatsScreen } from './views/StatsScreen';
import { SettingScreen } from './views/SettingScreen';
import { NotFoundScreen } from './views/NotFoundScreen';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/settings" element={<SettingScreen />} />
          <Route path="/fun" element={<GameScreen />} />
          <Route path="/stats" element={<StatsScreen />} />
          <Route path="*" element={<NotFoundScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
