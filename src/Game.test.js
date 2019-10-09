import Game from './Game';
import Player from './Player';

describe('Game', () => {

    it('should draw the game', () => {
        const player1 = new Player(0, 0, 0, true);
        const player2 = new Player(1, 0, 0, false);
        const outcome= [1, 1, 1, 3, 1, 1, 2, 1, 1];
        const game = new Game([player1, player2], outcome);
        const expectedResult = 'Match drawn by First Player 6 Points, Second PLayer 6 points';
        expect(game.start()).toEqual(expectedResult);
    });

    it('should won the first player by 5-0', () => {
        const player1 = new Player(0, 0, 0, true);
        const player2 = new Player(1, 0, 0, false);
        const outcome = [1, 6, 1, 6, 1, 6, 1, 6, 1];
        const game = new Game([player1, player2],outcome);
        const expectedResult = 'First player won by 5-0';
        expect(game.start()).toEqual(expectedResult);
    });

    it('should won the second player by 5-0', () => {
        const player1 = new Player(0, 0, 0, true);
        const player2 = new Player(1, 0, 0, false);
        const outcome = [1, 6, 1, 6, 1, 3, 5, 2, 5, 2]
        const game = new Game([player1, player2], outcome);

        const expectedResult = 'Second Player won by 1-5';
        expect(game.start()).toEqual(expectedResult);
    });

    it('should won the Second player by 11-15', () => {
        const player1 = new Player(0, 0, 0, true);
        const player2 = new Player(1, 0, 0, false);
        const outcome = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1,1,1,1,1,1,1,1,1,1,3,6,2];
        const game = new Game([player1, player2], outcome);

        const expectedResult = 'Second Player won by 11-15';
        expect(game.start()).toEqual(expectedResult);
    });

});