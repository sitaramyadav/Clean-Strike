import { strikerActions } from '../Actions/strikerActions';

class Player {
    constructor( id, chance) {
        this.id = id;
        this.score = 0;
        this.foul = 0;
        this.chance = chance;
    }

    play (striker) {
       const action = strikerActions(striker);

        if (action.points <= 0) {
            this.foul = this.foul + 1;
        }
        this.score = this.score + (action.points);

        // Remove the one points if there is 3  foul remove one more points
        if (this.foul > 2 ) {
            this.score = this.score - 1;
        }

    }
}

export default Player;