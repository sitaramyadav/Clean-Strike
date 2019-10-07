import { Operation } from "./Operation";
import { areCoinsExhausted, isFoul, result, isAnyPlayerWon } from "./Utils";


const Play = function(players, inputs) {
    const coin = { redCoin: 1, blackCoin: 9 };
    let playerNo;
    let operation;

    for (let i = 0; i < inputs.length; i++) {
        operation = Operation(inputs[i]);
        playerNo = i % 2;
        if (operation.points < 0) {
            players[playerNo].foul = (players[playerNo].foul + 1);
        }
        players[playerNo].score = (players[playerNo].score + operation.points);

        // Remove the one points if there is 3  foul remove one more points
        if (isFoul(players[playerNo].foul)) {
            players[playerNo].score = (players[playerNo].score - 1);
        }

        if (operation.coinRemoved == 255) {
            coin.redCoin = 0;

        } else {
            coin.blackCoin = coin.blackCoin - operation.coinRemoved;

        }

        if (isAnyPlayerWon(players) || areCoinsExhausted(coin)) {
            return players;
        }

    }
    return players;
};

const getResult = function(players) {
    return result(players);
};

const createPlayers = () => {
    return [
        { id: 0, score: 0, foul: 0 },
        { id: 1, score: 0, foul: 0 }
    ];
};
export const PlayCleanStrike = function(inputs) {

    return getResult(Play(createPlayers(), inputs));
};