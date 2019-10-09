
class Game  {
    constructor(players, outcome) {
        this.players = players;
        this.inputs = outcome;
        this.coins = { redCoin: 1, blackCoin: 9 };

    }

    changeTurn (id) {
        this.players[id].chance = false;
        this.players[id === 0 ? 1: 0].chance = true;
    }
    isAnyPlayerWon (players) {
        return (Math.abs(players[0].score - players[1].score) >= 3 &&
            (players[0].score >= 5 || players[1].score >= 5));
    }

    areCoinsExhausted (coin) {
        return coin.redCoin === 0 && coin.blackCoin === 0 ? true : false;
    }

    result (players) {
        const firstPlayerScore = players[0].score;
        const secondPlayerScore = players[1].score;
        if(Math.abs(firstPlayerScore - secondPlayerScore) >= 3
            && (players[0].score > 4 || secondPlayerScore > 4)) {
            return firstPlayerScore > secondPlayerScore ? ('First player won by '+firstPlayerScore +'-' +(secondPlayerScore > 0 ? secondPlayerScore: 0 ))
                : ('Second Player won by ' + firstPlayerScore + '-' + secondPlayerScore);

        } else {
            return `Match drawn by First Player ${firstPlayerScore} Points, Second PLayer ${secondPlayerScore} points`;
        }
    }


    start () {
        for (let i = 0; i < this.inputs.length; i++) {
            const currentPlayer = this.players.find(e => e.chance === true);
            const striker = this.inputs[i];
            this.players[currentPlayer.id].play(striker, this.coins);

            this.changeTurn(currentPlayer.id);

            if (this.isAnyPlayerWon(this.players) || this.areCoinsExhausted(this.coins)) {
                return this.result(this.players);
            }

        }
        return this.result(this.players);
    }
}

export default Game;