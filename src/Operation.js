const STRIKE = 1;
const MULTI_STRIKE = 2;
const RED_STRIKE = 3;
const STRIKER_STRIKE = 4;
const DEFUNCT_COIN = 5;
const NONE = 6;
export const Operation = function (operation) {

    switch (operation) {
        case STRIKE :
            return { option: 1, points: 1, coinRemoved: 1 };
        case MULTI_STRIKE :

            return  { option: 2, points: 2, coinRemoved: 2 };
        case RED_STRIKE :
            return  { option: 3, points: 3, coinRemoved: 255 };
        case STRIKER_STRIKE :
            return  { option: 4, points: -1, coinRemoved: 0 };
        case DEFUNCT_COIN :
            return  { option: 5, points: -2, coinRemoved: -1 };
        case NONE :
            return  { option: 6, points: 0, coinRemoved: 0 };

    }

};