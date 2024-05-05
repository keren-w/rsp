export const TOOLS = {
    ROCK: "rock",
    PAPER: "paper",
    SCISSORS: 'scissors'
};

export const chooseRandomTool = () => {
    return [TOOLS.ROCK, TOOLS.PAPER, TOOLS.SCISSORS][Math.floor(Math.random() * 3)];
};

export const getResults = (userTool, computerTool) => {
    
    if (userTool === computerTool) {
        return 'noone';
    };

    switch(userTool) {
        case (TOOLS.PAPER): {
            return computerTool === TOOLS.ROCK ? 'userScore' : 'computerScore';
        }
        case (TOOLS.ROCK): {
            return computerTool === TOOLS.SCISSORS ? 'userScore' : 'computerScore';
        }
        case (TOOLS.SCISSORS): {
            return computerTool === TOOLS.PAPER ? 'userScore' : 'computerScore';
        }
    }
    return 'noone';
}