export interface TodoItem {
    id: string;
    title: string;
    active: boolean;
  }

  export interface CounterState {
    todos: TodoItem[];
  }

  export interface ContextModel {
    state: CounterState;
    dispatch: React.Dispatch<CounterAction>;
  }

  export type CounterAction =
  | { type: 'ADD'; payload: TodoItem }
  | { type: 'DELETE'; payload: string };