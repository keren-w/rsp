
const ScoreBoard = ({computerScore, userScore}) => {
    return <div className='result-board'>

<div className='score-display'>
    <span>User Score</span>
<span>{userScore}</span>
</div>
<div>Rock Paper Scissors</div>
<div className='score-display'>
    <span>Computer Score</span>
<span>{computerScore}</span>
</div>

        
    </div>
};

export default ScoreBoard;