import Game from './Game';
import Player from '../Player/Player';
import {
    STRIKE, MULTI_STRIKE, RED_STRIKE,
    STRIKER_STRIKE, DEFUNCT_COIN, NONE
} from '../Actions/strikerActions';

// eslint-disable-next-line no-undef
/* eslint no-undef: { "describe": true , "expect": true, "it": true} */

describe('Game', () => {

    it('should decrement a black coin only when outcome is STRIKE', () => {
        const player1 = new Player(0, true);
        const player2 = new Player(1, false);
        const outcome =
            [
                STRIKE
            ];
        const game = new Game([player1, player2], outcome);
        const expectedResult = { blackCoins: 8, redCoins: 1};
        game.updateCoins(STRIKE);
        expect(game.coins.blackCoin).toEqual(expectedResult.blackCoins);
        expect(game.coins.redCoin).toEqual(expectedResult.redCoins);
    });


    it('should not decrement coins when outcome is Multi-strike', () => {
        const player1 = new Player(0, true);
        const player2 = new Player(1, false);
        const outcome =
            [
                MULTI_STRIKE
            ];
        const game = new Game([player1, player2], outcome);
        const expectedResult = { blackCoins: 9, redCoins: 1};
        game.updateCoins(MULTI_STRIKE);
        expect(game.coins.blackCoin).toEqual(expectedResult.blackCoins);
        expect(game.coins.redCoin).toEqual(expectedResult.redCoins);
    });

    it('should decrement a red coin only when outcome is Red strike', () => {
        const player1 = new Player(0, true);
        const player2 = new Player(1, false);
        const outcome =
            [
                RED_STRIKE
            ];
        const game = new Game([player1, player2], outcome);
        const expectedResult = { blackCoins: 9, redCoins: 0};
        game.updateCoins(RED_STRIKE);
        expect(game.coins.blackCoin).toEqual(expectedResult.blackCoins);
        expect(game.coins.redCoin).toEqual(expectedResult.redCoins);
    });

    it('should not decrement any coins when outcome is Striker strike', () => {
        const player1 = new Player(0, true);
        const player2 = new Player(1, false);
        const outcome =
            [
                STRIKER_STRIKE
            ];
        const game = new Game([player1, player2], outcome);
        const expectedResult = { blackCoins: 9, redCoins: 1};
        game.updateCoins(STRIKER_STRIKE);
        expect(game.coins.blackCoin).toEqual(expectedResult.blackCoins);
        expect(game.coins.redCoin).toEqual(expectedResult.redCoins);
    });

    it('should chang the turn of a player', () => {
        const player1 = new Player(0, true);
        const player2 = new Player(1, false);
        const outcome =
            [
                STRIKER_STRIKE
            ];
        const game = new Game([player1, player2], outcome);

        expect(player1.chance).toEqual(true);
        expect(player2.chance).toEqual(false);
        game.changeTurn(player1.id);
        expect(player1.chance).toEqual(false);
        expect(player2.chance).toEqual(true);
    });

    it('should return truthy when coins are exhausted', () => {
        const player1 = new Player(0, true);
        const player2 = new Player(1, false);
        const outcome =
            [
                STRIKE, NONE, STRIKE, RED_STRIKE,
                STRIKE, STRIKE, STRIKE, STRIKE,
                STRIKE, STRIKE, STRIKE
            ];
        const game = new Game([player1, player2], outcome);

        expect(game.areCoinsExhausted()).toEqual(false);
        game.start();
        expect(game.areCoinsExhausted()).toEqual(true);
    });

    it('should draw the game', () => {
        const player1 = new Player(0, true);
        const player2 = new Player(1, false);
        const outcome =
             [
                STRIKE, STRIKE, STRIKE, RED_STRIKE,
                STRIKE, STRIKE, MULTI_STRIKE,
                STRIKE, STRIKE
            ];
        const game = new Game([player1, player2], outcome);
        const expectedResult = 'Match drawn by 6-6';
        expect(game.start()).toEqual(expectedResult);
    });

    it('should won the first player by 5-0', () => {
        const player1 = new Player(0, true);
        const player2 = new Player(1, false);
        const outcome =
            [ STRIKE, NONE, STRIKE, NONE, STRIKE,
                NONE, STRIKE, STRIKER_STRIKE, STRIKE
            ];
        const game = new Game([player1, player2],outcome);
        const expectedResult = 'First player won by 5-0';
        expect(game.start()).toEqual(expectedResult);
    });

    it('should won the second player by 5-0 and format the message', () => {
        const player1 = new Player(0, true);
        const player2 = new Player(1, false);
        const outcome =
            [
                STRIKE, NONE, STRIKE, NONE,
                STRIKE, RED_STRIKE, DEFUNCT_COIN,
                MULTI_STRIKE, DEFUNCT_COIN, MULTI_STRIKE
            ];
        const game = new Game([player1, player2], outcome);

        expect(game.start()).toEqual(game.formatWinnerMessage(player1.score, player2.score));
    });

    it('should won the Second player by 11-15', () => {
        const player1 = new Player(0, true);
        const player2 = new Player(1, false);
        const outcome =
            [
                STRIKE, STRIKE, STRIKE, STRIKE, STRIKE,
                STRIKE, STRIKE, STRIKE, STRIKE, STRIKE,
                STRIKE, STRIKE, STRIKE, STRIKE, STRIKE,
                STRIKE, STRIKE, STRIKE, STRIKE, STRIKE,
                STRIKE, RED_STRIKE, NONE, MULTI_STRIKE
            ];
        const game = new Game([player1, player2], outcome);

        expect(game.start()).toEqual(game.formatWinnerMessage(player1.score, player2.score));
    });

});