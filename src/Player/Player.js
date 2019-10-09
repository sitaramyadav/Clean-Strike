import { strikerActions } from '../Actions/strikerActions';

class Player {
    constructor( id, score, foul, chance) {
        this.id = id;
        this.score = score;
        this.foul = foul;
        this.chance = chance;
    }

    removeBlackCoin(coinRemoved, coins) {
        if(coinRemoved >= 0 ) {
            coins.blackCoin = coins.blackCoin - coinRemoved;
        } else {
            this.foul = this.foul + 1;
            coins.blackCoin = coins.blackCoin + coinRemoved;
        }
    }

    play (striker, coins) {
       const action = strikerActions(striker);

        if (action.points <= 0) {
            this.foul = this.foul + 1;
        }
        this.score = this.score + (action.points);

        // Remove the one points if there is 3  foul remove one more points
        if (this.foul > 2 ) {
            this.score = this.score - 1;
        }

        if (action.coinRemoved == 'RED') {
            coins.redCoin = 0;
        } else {
            this.removeBlackCoin(action.coinRemoved, coins);

        }

    }
}

export default Player;