
class Game {
    constructor(players, outcome) {
        this.players = players;
        this.outcome = outcome;
        this.coins = {redCoin: 1, blackCoin: 9};

    }

    updateBlackCoins(striker) {
        if (striker >= 0) {
            this.coins.blackCoin = this.coins.blackCoin - striker;
        } else {
            this.coins.blackCoin = this.coins.blackCoin + striker;
        }
    }

    updateCoins(striker) {
        if (striker === 3) {
            this.coins.redCoin = 0;
        } else {
            this.updateBlackCoins(striker);

        }
    }

    changeTurn(id) {
        this.players[id].chance = false;
        this.players[id === 0 ? 1 : 0].chance = true;
    }

    isAnyPlayerWon() {
        return (Math.abs(this.players[0].score - this.players[1].score) >= 3 &&
            (this.players[0].score >= 5 || this.players[1].score >= 5));
    }

    areCoinsExhausted() {
        return this.coins.redCoin === 0 && this.coins.blackCoin === 0 ? true : false;
    }

    result() {
        const firstPlayerScore = this.players[0].score;
        const secondPlayerScore = this.players[1].score;
        if (Math.abs(firstPlayerScore - secondPlayerScore) >= 3
            && (this.players[0].score > 4 || secondPlayerScore > 4)) {
            return firstPlayerScore > secondPlayerScore ? ('First player won by ' + firstPlayerScore + '-' + (secondPlayerScore > 0 ? secondPlayerScore : 0))
                : ('Second Player won by ' + firstPlayerScore + '-' + secondPlayerScore);

        } else {
            return `Match drawn by ${firstPlayerScore}-${secondPlayerScore}`;
        }
    }


    start () {
        for (let i = 0; i < this.outcome.length; i++) {
            const currentPlayer = this.players.find(e => e.chance === true);
            const striker = this.outcome[i];
            this.players[currentPlayer.id].play(striker);
            this.updateCoins(striker);
            this.changeTurn(currentPlayer.id);

            if (this.isAnyPlayerWon() || this.areCoinsExhausted()) {
                return this.result();
            }

        }
        return this.result();
    }
}

export default Game;