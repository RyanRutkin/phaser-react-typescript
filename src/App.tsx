import React from 'react';
import './App.css';
import { GameContextProvider } from './contexts/Game.context';
import { AppGame } from './components/Game.component';

const App = () => <div className="app" >
  <GameContextProvider>
    <AppGame />
  </GameContextProvider>
</div>

export default App;
