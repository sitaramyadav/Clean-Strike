import { PlayCleanStrike } from './PlayCleanStrike';

describe('PlayCleanStrike', () => {

    it('should draw the game', () => {
        const result = PlayCleanStrike([1, 1, 1, 3, 1, 1, 2, 1, 1]);
        const expectedResult = "Match drawn by First Player 6 Points, Second PLayer 6 points";
        expect(result).toEqual(expectedResult);
    });

    it('should won the first player by 5-0', () => {
        const result = PlayCleanStrike([1, 6, 1, 6, 1, 6, 1, 6, 1]);
        const expectedResult = "First player won by 5-0";
        expect(result).toEqual(expectedResult);
    });

    it('should won the second player by 5-0', () => {
        const result = PlayCleanStrike([1, 6, 1, 6, 1, 3, 5, 2, 5, 2]);

        const expectedResult = "Second Player won by 1-5";
        expect(result).toEqual(expectedResult);
    });

    it('should won the Second player by 11-15', () => {
        const result = PlayCleanStrike([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1,1,1,1,1,1,1,1,1,1,3,6,2]);

        const expectedResult = "Second Player won by 11-15";
        expect(result).toEqual(expectedResult);
    });

});