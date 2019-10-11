import Game from './Game';
import Player from '../Player/Player';
import {
    STRIKE, MULTI_STRIKE, RED_STRIKE,
    STRIKER_STRIKE, DEFUNCT_COIN, NONE
} from '../Actions/strikerActions';

// eslint-disable-next-line no-undef
/* eslint no-undef: { "describe": true} */

describe('Game', () => {

    it('should decrement a black coin only when outcome is STRIKE', () => {
        const Suraj = new Player('Suraj');
        const Sumit = new Player('Sumit');
        const outcome =
            [
                STRIKE
            ];
        const game = new Game([Suraj, Sumit], outcome);
        const expectedResult = { blackCoins: 8, redCoins: 1};
        game.updateCoins(STRIKE);
        expect(game.coins.blackCoin).toEqual(expectedResult.blackCoins);
        expect(game.coins.redCoin).toEqual(expectedResult.redCoins);
    });


    it('should not decrement coins when outcome is Multi-strike', () => {
        const Suraj = new Player('Suraj');
        const Sumit = new Player('Sumit');
        const outcome =
            [
                MULTI_STRIKE
            ];
        const game = new Game([Suraj, Sumit], outcome);
        const expectedResult = { blackCoins: 9, redCoins: 1};
        game.updateCoins(MULTI_STRIKE);
        expect(game.coins.blackCoin).toEqual(expectedResult.blackCoins);
        expect(game.coins.redCoin).toEqual(expectedResult.redCoins);
    });

    it('should decrement a red coin only when outcome is Red strike', () => {
        const Suraj = new Player('Suraj');
        const Sumit = new Player('Sumit');
        const outcome =
            [
                RED_STRIKE
            ];
        const game = new Game([Suraj, Sumit], outcome);
        const expectedResult = { blackCoins: 9, redCoins: 0};
        game.updateCoins(RED_STRIKE);
        expect(game.coins.blackCoin).toEqual(expectedResult.blackCoins);
        expect(game.coins.redCoin).toEqual(expectedResult.redCoins);
    });

    it('should not decrement any coins when outcome is Striker strike', () => {
        const Suraj = new Player('Suraj');
        const Sumit = new Player('Sumit');
        const outcome =
            [
                STRIKER_STRIKE
            ];
        const game = new Game([Suraj, Sumit], outcome);
        const expectedResult = { blackCoins: 9, redCoins: 1};
        game.updateCoins(STRIKER_STRIKE);
        expect(game.coins.blackCoin).toEqual(expectedResult.blackCoins);
        expect(game.coins.redCoin).toEqual(expectedResult.redCoins);
    });

    it('should remove two coins when outcome is Defunct coin', () => {
        const Suraj = new Player('Suraj');
        const Sumit = new Player('Sumit');
        const outcome =
            [
                DEFUNCT_COIN
            ];
        const game = new Game([Suraj, Sumit], outcome);
        const expectedResult = { blackCoins: 7, redCoins: 1};
        game.updateCoins(DEFUNCT_COIN);
        expect(game.coins.blackCoin).toEqual(expectedResult.blackCoins);
        expect(game.coins.redCoin).toEqual(expectedResult.redCoins);
    });


    it('should change the turn of a player', () => {
        const Suraj = new Player('Suraj');
        const Sumit = new Player('Sumit');
        const outcome =
            [
                STRIKER_STRIKE
            ];
        const game = new Game([Suraj, Sumit], outcome);

        expect(game.changeTurn(0)).toEqual(1);
        expect(game.changeTurn(1)).toEqual(0);
        
    });

    it('should return truthy when coins are exhausted', () => {
        const Suraj = new Player('Suraj');
        const Sumit = new Player('Sumit');
        const outcome =
            [
                STRIKE, NONE, STRIKE, RED_STRIKE,
                STRIKE, STRIKE, STRIKE, STRIKE,
                STRIKE, STRIKE, STRIKE
            ];
        const game = new Game([Suraj, Sumit], outcome);

        expect(game.areCoinsExhausted()).toEqual(false);
        game.start();
        expect(game.areCoinsExhausted()).toEqual(true);
    });

    it('should draw the game', () => {
        const Suraj = new Player('Suraj');
        const Sumit = new Player('Sumit');
        const outcome =
             [
                STRIKE, STRIKE, STRIKE, RED_STRIKE,
                STRIKE, STRIKE, MULTI_STRIKE,
                STRIKE, STRIKE
            ];
        const game = new Game([Suraj, Sumit], outcome);
        const expectedResult = 'Match drawn by 6, 6';
        expect(game.start()).toEqual(expectedResult);
    });

    it('should won Suraj by 5, 0', () => {
    const Suraj = new Player('Suraj');
        const Sumit = new Player('Sumit');
        const outcome =
            [ 
                STRIKE, NONE,
                STRIKE, NONE, 
                STRIKE, STRIKE, 
                STRIKE, STRIKER_STRIKE, 
                STRIKE
            ];
        const game = new Game([Suraj, Sumit],outcome);
        const expectedResult = 'Suraj won by 5, 0';
        expect(game.start()).toEqual(expectedResult);
    });

    it('should won Sumit won by 1, 5', () => {
        const Suraj = new Player('Suraj');
        const Sumit = new Player('Sumit');
        const outcome =
            [
                STRIKE, NONE,
                STRIKE, NONE,
                STRIKE, RED_STRIKE,
                DEFUNCT_COIN, MULTI_STRIKE,
                DEFUNCT_COIN, MULTI_STRIKE
            ];
        const game = new Game([Suraj, Sumit], outcome);
        const expectedResult = 'Sumit won by 1, 5';

        expect(game.start()).toEqual(expectedResult);
    });

    it('should won Sumit by 11, 15', () => {
        const Suraj = new Player('Suraj');
        const Sumit = new Player('Sumit');
        const outcome =
            [
                STRIKE, STRIKE, STRIKE, STRIKE, STRIKE,
                STRIKE, STRIKE, STRIKE, STRIKE, STRIKE,
                STRIKE, STRIKE, STRIKE, STRIKE, STRIKE,
                STRIKE, STRIKE, STRIKE, STRIKE, STRIKE,
                STRIKE, RED_STRIKE, NONE, MULTI_STRIKE
            ];
        const game = new Game([Suraj, Sumit], outcome);
        const expectedResult = 'Sumit won by 11, 15';


        expect(game.start()).toEqual(expectedResult);
    });

});