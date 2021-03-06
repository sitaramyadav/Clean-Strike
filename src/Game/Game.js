import { DEFUNCT_COIN, MULTI_STRIKE, RED_STRIKE, STRIKE, STRIKER_STRIKE } from '../Actions/strikerActions';

class Game {
    constructor(players, outcome) {
        this.players = players;
        this.outcome = outcome;
        this.coins = { redCoin: 1, blackCoin: 9 };
        this.currentPlayerIndex = 0;

    }

    updateCoins(striker) {
        switch (striker) {
            case STRIKE :
                return this.coins.blackCoin = this.coins.blackCoin - 1;
            case MULTI_STRIKE :
                return this.coins.blackCoin = this.coins.blackCoin - 2;
            case RED_STRIKE:
                return this.coins.redCoin = this.coins.redCoin -1;
            case DEFUNCT_COIN :
                return this.coins.blackCoin = this.coins.blackCoin - 1;
            case STRIKER_STRIKE:
                return ;
        }
    }

    changeTurn() {

         if (this.currentPlayerIndex < this.players.length - 1) {
            this.currentPlayerIndex = this.currentPlayerIndex + 1;
        } else {
            this.currentPlayerIndex = 0;
         }
         return this.currentPlayerIndex;
    }

    isAnyPlayerWon() {
        return (Math.abs(this.players[0].score - this.players[1].score) >= 3 &&
            (this.players[0].score >= 5 || this.players[1].score >= 5));
    }

    areCoinsExhausted() {
        return this.coins.redCoin === 0 && this.coins.blackCoin === 0;
    }

    formatWinnerMessage(firstPlayer, secondPlayer) {
        return firstPlayer.score > secondPlayer.score
            ? (`${firstPlayer.name} won the game. Final Score: ${firstPlayer.score}, ${Math.abs(secondPlayer.score)}`)
            : (`${secondPlayer.name} won the game. Final Score: ${firstPlayer.score}, ${Math.abs(secondPlayer.score)}`);
    }

    result() {
        const firstPlayer = this.players[0];
        const secondPlayer = this.players[1];
        if (Math.abs(firstPlayer.score - secondPlayer.score) >= 3
             && (firstPlayer.score > 4 || secondPlayer.score > 4)) {
            return this.formatWinnerMessage(firstPlayer, secondPlayer);

        } else {
            if(this.areCoinsExhausted()) {
                return `Game is drawn. Final Score: ${firstPlayer.score}, ${secondPlayer.score}`;
            } else {
                return `Game is still progress. Final Score: ${firstPlayer.score}, ${secondPlayer.score}`;

            }
        }
        
    }

    start () {
        for (let i = 0; i < this.outcome.length; i++) {
            const striker = this.outcome[i];
            this.players[this.currentPlayerIndex].play(striker);
            this.updateCoins(striker);
            this.changeTurn();

            if (this.isAnyPlayerWon() || this.areCoinsExhausted()) {
                return this.result();
            }

        }
        return this.result();
    }

}

export default Game;