import { createContext, useReducer } from "react";

interface AppContext {
  state: AppContextState;
  dispatch: AppContextDispatch;
}

interface AppContextState {
  count: number;
}

interface AppContextDispatch {
  type: AppContextDispatchType;
  payload: { [key: string]: unknown };
}

const enum AppContextDispatchType {
  COUNT_INCREMENT = "COUNT_INCREMENT",
}

export const initialState: AppContextState = {
  count: 0,
};

const reducer = (
  state: AppContextState,
  action: AppContextDispatch
): AppContextState => {
  switch (action.type) {
    case "COUNT_INCREMENT":
      if (typeof action.payload.amount === "number") {
        return { ...state, count: state.count + action.payload.amount };
      }
      return state;
    default:
      return state;
  }
};

export const useAppReducer = () => useReducer(reducer, initialState);
export const AppContext = createContext<{
  state: AppContextState;
  dispatch: React.Dispatch<AppContextDispatch>;
}>({
  state: initialState,
  dispatch: () => undefined,
});

export const incrementCount = (amount: number): AppContextDispatch => ({
  type: AppContextDispatchType.COUNT_INCREMENT,
  payload: { amount },
});
