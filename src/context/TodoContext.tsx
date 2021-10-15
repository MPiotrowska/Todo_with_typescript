import React, { createContext, ReactNode, useReducer } from 'react';

const initialState: TodoState = {
  todos: []
};
export interface TodoItem {
  id: string;
  title: string;
  active: boolean;
}

type TodoState = {
  todos: TodoItem[];
};

export type TodoAction =
  | { type: 'ADD'; payload: TodoItem }
  | { type: 'DELETE'; payload: string };

type TodoDispatch = (action: TodoAction) => void;

type TodoProviderProps = { children: ReactNode };

const TodoStateContext = createContext<
  { state: TodoState; dispatch: TodoDispatch } | undefined
>(undefined);

function todoReducer(state: TodoState, action: TodoAction): TodoState {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };

    case 'DELETE':
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.payload)
      };

    default:
      return state;
  }
}

function TodoProvider({ children }: TodoProviderProps) {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const value = { state, dispatch };
  return (
    <TodoStateContext.Provider value={value}>
      {children}
    </TodoStateContext.Provider>
  );
}

function useTodo() {
  const context = React.useContext(TodoStateContext);
  if (context === undefined) {
    throw new Error('useTodo must be used within a TodoProvider');
  }
  return context;
}

export { TodoProvider, useTodo, TodoStateContext };
