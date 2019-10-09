import Player from './Player';

describe('Player', () => {

    it('should have id, score, foul, chance', () => {
        const player = new Player(0, 0, 0, true);

        expect(player.id).toEqual(0);
        expect(player.score).toEqual(0);
        expect(player.foul).toEqual(0);
        expect(player.chance).toEqual(true);
    });

    it('should play the STRIKE and wins 1 points and remove one black coin only', () => {
        const player = new Player(0, 0, 0, true);
        const coins = { blackCoin: 9, redCoin: 1 };

        expect(player.score).toEqual(0);
        expect(coins.blackCoin).toEqual(9);

        player.play(1, coins);

        expect(player.score).toEqual(1);
        expect(coins.blackCoin).toEqual(8);
    });

    it('should play Multi-Strike and wins 2 points, but coins get back on to the carrom board', () => {
        const player = new Player(0, 0, 0, true);
        const coins = { blackCoin: 9, redCoin: 1 };

        expect(player.score).toEqual(0);
        expect(coins.blackCoin).toEqual(9);

        player.play(2, coins);

        expect(player.score).toEqual(2);
        expect(coins.blackCoin).toEqual(9);
    });

    it('should play Red strike and wins 3 points and remove the red coin only', () => {
        const player = new Player(0, 0, 0, true);
        const coins = { blackCoin: 9, redCoin: 1 };

        expect(player.score).toEqual(0);
        expect(coins.blackCoin).toEqual(9);
        expect(coins.redCoin).toEqual(1);

        player.play(3, coins);

        expect(player.score).toEqual(3);
        expect(coins.blackCoin).toEqual(9);
        expect(coins.redCoin).toEqual(0);
    });

    it('should play Striker strike and loses a point', () => {
        const player = new Player(0, 0, 0, true);
        const coins = { blackCoin: 9, redCoin: 1 };

        expect(player.score).toEqual(0);
        expect(coins.blackCoin).toEqual(9);
        expect(coins.redCoin).toEqual(1);

        player.play(4, coins);

        expect(player.score).toEqual(-1);
        expect(coins.blackCoin).toEqual(9);
        expect(coins.redCoin).toEqual(1);
    });


    it('should play Defunct coin and loses 2 points and a black coins should remove only', () => {
        const player = new Player(0, 0, 0, true);
        const coins = { blackCoin: 9, redCoin: 1 };

        expect(player.score).toEqual(0);
        expect(coins.blackCoin).toEqual(9);
        expect(coins.redCoin).toEqual(1);

        player.play(5, coins);

        expect(player.score).toEqual(-2);
        expect(coins.blackCoin).toEqual(8);
        expect(coins.redCoin).toEqual(1);
    });

    it('should loses a point when a player does not pocket a coin for 3 successive turns' , () => {
        const player = new Player(0, 0, 0, true);
        const coins = { blackCoin: 9, redCoin: 1 };

        expect(player.score).toEqual(0);
        expect(coins.blackCoin).toEqual(9);
        expect(coins.redCoin).toEqual(1);

        player.play(6, coins);
        player.play(6, coins);
        player.play(6, coins);

        expect(player.score).toEqual(-1);
    });


    it('should loses an additional point when a player ​fouls 3 times' , () => {
        const player = new Player(0, 0, 0, true);
        const coins = { blackCoin: 9, redCoin: 1 };

        expect(player.score).toEqual(0);
        expect(coins.blackCoin).toEqual(9);
        expect(coins.redCoin).toEqual(1);

        player.play(4, coins);
        player.play(5, coins);
        player.play(4, coins);

        expect(player.score).toEqual(-5);
    });
});