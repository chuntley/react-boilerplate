import {
  ADD_INITIAL_LOAD_COMPLETE,
  ADD_INITIAL_LOAD_PROGRESS,
  INCREMENT_ONE,
} from '../actions/sample';

const initialState = {
  loading: false,
  counter: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_INITIAL_LOAD_PROGRESS:
      return {
        ...state,
        loading: true,
      };
    case ADD_INITIAL_LOAD_COMPLETE:
      return {
        ...state,
        loading: false,
      };
    case INCREMENT_ONE:
      return {
        ...state,
        counter: (state.counter + 1),
      };
    default:
      return state;
  }
};
