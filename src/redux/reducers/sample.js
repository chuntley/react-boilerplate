import * as types from '../types';

const initialState = {
  counter: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.INCREMENT_ONE:
      return {
        ...state,
        counter: (state.counter + 1),
      };
    default:
      return state;
  }
};
