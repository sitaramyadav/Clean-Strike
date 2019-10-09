export const STRIKE = 1;
export const MULTI_STRIKE = 2;
export const RED_STRIKE = 3;
export const STRIKER_STRIKE = 4;
export const DEFUNCT_COIN = 5;
export const NONE = 6;
export const StrikerActions = function (action) {

    switch (action) {
        case STRIKE :
            return { option: 1, points: 1, coinRemoved: 1 };
        case MULTI_STRIKE :
            return  { option: 2, points: 2, coinRemoved: 0 };
        case RED_STRIKE :
            return  { option: 3, points: 3, coinRemoved: 'RED' };
        case STRIKER_STRIKE :
            return  { option: 4, points: -1, coinRemoved: 0 };
        case DEFUNCT_COIN :
            return  { option: 5, points: -2, coinRemoved: -1 };
        case NONE :
            return  { option: 6, points: 0, coinRemoved: 0 };

    }

};