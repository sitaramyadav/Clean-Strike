import {
    DEFUNCT_COIN, MULTI_STRIKE, NONE,
    RED_STRIKE, STRIKE,
    STRIKER_STRIKE, strikerActions} from './strikerActions';


// eslint-disable-next-line no-undef
/* eslint no-undef: { "describe": true} */
describe('Striker Actions', () => {
   it('Should map the points as per striker input', () => {

       expect(strikerActions(STRIKE)).toEqual({ points: 1});
       expect(strikerActions(MULTI_STRIKE)).toEqual({ points: 2 });
       expect(strikerActions(RED_STRIKE)).toEqual({ points: 3 });
       expect(strikerActions(STRIKER_STRIKE)).toEqual({ points: -1});
       expect(strikerActions(DEFUNCT_COIN)).toEqual({ points: -2});
       expect(strikerActions(NONE)).toEqual({ points: 0});
   });
});