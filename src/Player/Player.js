import { strikerActions } from '../Actions/strikerActions';

class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
        this.foul = 0;
        this.none_successive_turn = 0;
    }

    play (striker) {

       const action = strikerActions(striker);

       if( action.points >= 1) {
            this.score = this.score + (action.points);
       } 
       
       if( action.points < 0) {
        this.score = this.score + (action.points);
            this.foul = this.foul + 1;

            if (this.foul === 3) {
                this.score = this.score - 1;
                this.foul = 0;
     
            }
        }

       if( action.points === 0) {
            this.none_successive_turn = this.none_successive_turn + 1;
            
            if (this.none_successive_turn === 3) {
                this.score = this.score - 1;
                this.none_successive_turn = 0;
            }
        }

    }
}

export default Player;

