
export const isFoul = function(foul) {
    return foul % 3 == 3;
};


export const isAnyPlayerWon = function(players) {
    return (Math.abs(players[0].score - players[1].score) >= 3 &&
        (players[0].score >= 5 || players[1].score >= 5));
};

export const areCoinsExhausted = function(coin) {
    return coin.redCoin == 0 && coin.blackCoin == 0 ? true : false;
};

export const result = function(players) {
    const firstPlayerScore = players[0].score;
    const secondPlayerScore = players[1].score;
    if(Math.abs(firstPlayerScore - secondPlayerScore) >= 3
        && (players[0].score > 4 || secondPlayerScore > 4)) {
        const won = firstPlayerScore > secondPlayerScore ? ('First player won by '+firstPlayerScore +'-' +secondPlayerScore)
            : ('Second Player won by ' + firstPlayerScore + '-' + secondPlayerScore);
        return won;
    } else {
        return `Match drawn by First Player ${firstPlayerScore} Points, Second PLayer ${secondPlayerScore} points`;
    }
};