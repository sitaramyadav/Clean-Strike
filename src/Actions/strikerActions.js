export const STRIKE = 1;
export const MULTI_STRIKE = 2;
export const RED_STRIKE = 3;
export const STRIKER_STRIKE = 4;
export const DEFUNCT_COIN = 5;
export const NONE = 6;
export const strikerActions = function (action) {

    switch (action) {
        case STRIKE :
            return { points: 1};
        case MULTI_STRIKE :
            return  { points: 2 };
        case RED_STRIKE :
            return  { points: 3 };
        case STRIKER_STRIKE :
            return  { points: -1 };
        case DEFUNCT_COIN :
            return  { points: -2 };
        case NONE :
            return  { points: 0 };

    }
};