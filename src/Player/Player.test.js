import Player from './Player';
import {
    STRIKE, MULTI_STRIKE, RED_STRIKE,
    STRIKER_STRIKE, DEFUNCT_COIN, NONE
} from '../Actions/strikerActions';

// eslint-disable-next-line no-undef
/* eslint no-undef: { "describe": true} */

describe('Player', () => {

    it('should have id, score, foul, chance', () => {
        const player = new Player(0, true);

        expect(player.id).toEqual(0);
        expect(player.score).toEqual(0);
        expect(player.foul).toEqual(0);
        expect(player.chance).toEqual(true);
    });

    it('should play the STRIKE and wins 1 points', () => {
        const player = new Player(0, true);

        expect(player.score).toEqual(0);

        player.play(STRIKE);

        expect(player.score).toEqual(1);
    });

    it('should play Multi-Strike and wins 2 points, but coins get back on to the carrom board', () => {
        const player = new Player(0, true);

        expect(player.score).toEqual(0);

        player.play(MULTI_STRIKE);

        expect(player.score).toEqual(2);
    });

    it('should play Red strike and wins 3 points', () => {
        const player = new Player(0, true);

        expect(player.score).toEqual(0);

        player.play(RED_STRIKE);

        expect(player.score).toEqual(3);
    });

    it('should play Striker strike and loses a point', () => {
        const player = new Player(0, true);

        expect(player.score).toEqual(0);

        player.play(STRIKER_STRIKE);

        expect(player.score).toEqual(-1);
    });


    it('should play Defunct coin and loses 2 points and a black coins should remove only', () => {
        const player = new Player(0, true);

        expect(player.score).toEqual(0);

        player.play(DEFUNCT_COIN);

        expect(player.score).toEqual(-2);
    });

    it('should loses a point when a player does not pocket a coin for 3 successive turns' , () => {
        const player = new Player(0, true);

        expect(player.score).toEqual(0);

        player.play(NONE);
        player.play(NONE);
        player.play(NONE);

        expect(player.score).toEqual(-1);
    });


    it('should loses an additional point when a player ​fouls 3 times' , () => {
        const player = new Player(0, true);

        expect(player.score).toEqual(0);

        player.play(STRIKER_STRIKE);
        player.play(DEFUNCT_COIN);
        player.play(STRIKER_STRIKE);

        expect(player.score).toEqual(-5);
    });
});