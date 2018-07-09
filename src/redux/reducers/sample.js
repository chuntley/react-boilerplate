import * as types from '../types';

const initialState = {
  loading: false,
  counter: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_INITIAL_LOAD_PROGRESS:
      return {
        ...state,
        loading: true,
      };
    case types.ADD_INITIAL_LOAD_COMPLETE:
      return {
        ...state,
        loading: false,
      };
    case types.INCREMENT_ONE:
      return {
        ...state,
        counter: (state.counter + 1),
      };
    default:
      return state;
  }
};
