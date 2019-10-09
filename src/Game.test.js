import Game from './Game';
import Player from './Player';
import {
    STRIKE, MULTI_STRIKE, RED_STRIKE,
    STRIKER_STRIKE, DEFUNCT_COIN, NONE
} from './strikerActions';

// eslint-disable-next-line no-undef
/* eslint no-undef: { "describe": true , "expect": true, "it": true} */

describe('Game', () => {

    it('should draw the game', () => {
        const player1 = new Player(0, 0, 0, true);
        const player2 = new Player(1, 0, 0, false);
        const outcome =
             [
                STRIKE, STRIKE, STRIKE, RED_STRIKE,
                STRIKE, STRIKE, MULTI_STRIKE,
                STRIKE, STRIKE
            ];
        const game = new Game([player1, player2], outcome);
        const expectedResult = 'Match drawn by First Player 6 Points, Second PLayer 6 points';
        expect(game.start()).toEqual(expectedResult);
    });

    it('should won the first player by 5-0', () => {
        const player1 = new Player(0, 0, 0, true);
        const player2 = new Player(1, 0, 0, false);
        const outcome =
            [ STRIKE, NONE, STRIKE, NONE, STRIKE,
                NONE, STRIKE, STRIKER_STRIKE, STRIKE
            ];
        const game = new Game([player1, player2],outcome);
        const expectedResult = 'First player won by 5-0';
        expect(game.start()).toEqual(expectedResult);
    });

    it('should won the second player by 5-0', () => {
        const player1 = new Player(0, 0, 0, true);
        const player2 = new Player(1, 0, 0, false);
        const outcome =
            [
                STRIKE, NONE, STRIKE, NONE,
                STRIKE, RED_STRIKE, DEFUNCT_COIN,
                MULTI_STRIKE, DEFUNCT_COIN, MULTI_STRIKE
            ];
        const game = new Game([player1, player2], outcome);

        const expectedResult = 'Second Player won by 1-5';
        expect(game.start()).toEqual(expectedResult);
    });

    it('should won the Second player by 11-15', () => {
        const player1 = new Player(0, 0, 0, true);
        const player2 = new Player(1, 0, 0, false);
        const outcome =
            [
                STRIKE, STRIKE, STRIKE, STRIKE, STRIKE,
                STRIKE, STRIKE, STRIKE, STRIKE, STRIKE,
                STRIKE, STRIKE, STRIKE, STRIKE, STRIKE,
                STRIKE, STRIKE, STRIKE, STRIKE, STRIKE,
                STRIKE, RED_STRIKE, NONE, MULTI_STRIKE
            ];
        const game = new Game([player1, player2], outcome);

        const expectedResult = 'Second Player won by 11-15';
        expect(game.start()).toEqual(expectedResult);
    });

});