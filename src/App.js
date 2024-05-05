import { useState } from 'react';
import './App.css';
import Game from './Components/Game';
import Board from './Components/Board';

function App() {
  const [scores, setScores] = useState({userScore: 0, computerScore: 0});

  const {userScore, computerScore} = scores;
  return (
    <div className="App">
      <Board computerScore={computerScore} userScore={userScore}/>
      <Game onPlay={winner => setScores(scores => ({...scores, [winner]: scores[winner]+1}))}/>
    </div>
  );
}

export default App;
