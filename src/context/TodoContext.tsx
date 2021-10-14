import { useReducer, createContext } from "react";
import { ContextModel, CounterAction, CounterState } from "../interface";


const defaultState:CounterState = {
    todos: []
}

const reducer =(state: CounterState, action: CounterAction):CounterState => {
switch(action.type) {
    default :
    return state;
}

};

export const Context = createContext({} as ContextModel);

export const Provider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};