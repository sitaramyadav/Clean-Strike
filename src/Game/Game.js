import { DEFUNCT_COIN, MULTI_STRIKE, RED_STRIKE, STRIKE, STRIKER_STRIKE } from '../Actions/strikerActions';

class Game {
    constructor(players, outcome) {
        this.players = players;
        this.outcome = outcome;
        this.coins = {redCoin: 1, blackCoin: 9};

    }

    updateCoins(striker) {
        switch (striker) {
            case STRIKE :
                return this.coins.blackCoin = this.coins.blackCoin - 1;
            case RED_STRIKE:
                return this.coins.redCoin = this.coins.redCoin -1;
            case DEFUNCT_COIN :
                return this.coins.blackCoin = this.coins.blackCoin - 2;
            case STRIKER_STRIKE:
            case MULTI_STRIKE :
                return ;
        }
    }

    changeTurn(currentId) {
        let id = null;

        this.players[currentId].chance = false;
         if(currentId < this.players.length -1) {
             id = id+1;
        } else {
             id = 0;
         }

        this.players[id].chance = true;
    }

    isAnyPlayerWon() {
        return (Math.abs(this.players[0].score - this.players[1].score) >= 3 &&
            (this.players[0].score >= 5 || this.players[1].score >= 5));
    }

    areCoinsExhausted() {
        return this.coins.redCoin === 0 && this.coins.blackCoin === 0 ? true : false;
    }

    formatWinnerMessage(firstPlayerScore, secondPlayerScore) {
        return firstPlayerScore > secondPlayerScore
            ? (`First player won by ${firstPlayerScore}-${(secondPlayerScore > 0 ? secondPlayerScore : 0)}`)
            : (`Second Player won by ${firstPlayerScore}-${secondPlayerScore}`);
    }

    result() {
        const firstPlayerScore = this.players[0].score;
        const secondPlayerScore = this.players[1].score;
        if (Math.abs(firstPlayerScore - secondPlayerScore) >= 3
            && (this.players[0].score > 4 || secondPlayerScore > 4)) {
            return this.formatWinnerMessage(firstPlayerScore, secondPlayerScore);

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