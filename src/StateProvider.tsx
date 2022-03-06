import { createContext, Dispatch, useContext, useReducer } from "react";
import { StateType, ActionType } from "./reducer";

import { initialState } from "./reducer";

type ContextType = [StateType, Dispatch<ActionType>];

const fakeDispatch = (action: ActionType) => {};
const StateContext = createContext<ContextType>([initialState, fakeDispatch]);

type StateProviderPropsType = {
  children: React.ReactNode,
  initialState: StateType,
  reducer: (state: StateType, action: ActionType) => StateType
};

export const StateProvider = ({
  children,
  reducer,
  initialState,
}: StateProviderPropsType) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
