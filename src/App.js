import { useState } from 'react';
import Game from './components/Game';
import GameHeader from './components/GameHeader';

function App() {

  const [scores, setScores] = useState({user: 0, computer: 0});
  return (
    <div>
      <GameHeader computerScore={scores.computer} userScore={scores.user}/>
      <Game onPlay={winner => setScores(scores => ({...scores, [winner]: scores[winner]+1}))}/>
    </div>
  );
}

export default App;
