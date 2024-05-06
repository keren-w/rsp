import { useState } from 'react';
import Game from './components/Game';
import GameHeader from './components/GameHeader';
import { GameContext } from './common/gameContext';

function App() {

  const [scores, setScores] = useState({ user: 0, computer: 0 });
  const [round, setRound] = useState(1);

  const gameContext = {
    scores,
    updateScores: winner => setScores(scores => ({ ...scores, [winner]: scores[winner] + 1 })),
    round,
    setRound
  };
  return (
    <GameContext.Provider value={gameContext}>
      <GameHeader />
      <Game />
    </GameContext.Provider>
  );
}

export default App;
