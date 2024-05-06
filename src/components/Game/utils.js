export const TOOLS = {
    ROCK: "rock",
    PAPER: "paper",
    SCISSORS: 'scissors'
};

export const chooseRandomTool = () => {
    return [TOOLS.ROCK, TOOLS.PAPER, TOOLS.SCISSORS][Math.floor(Math.random() * 3)];
};

export const getResults = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'tie';
    }

    const winningChoices = {
        rock: 'scissors',
        scissors: 'paper',
        paper: 'rock'
    };

    return winningChoices[userChoice] === computerChoice ? 'user' : 'computer';
}
