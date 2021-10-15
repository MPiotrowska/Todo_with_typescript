import { FormEvent, useContext, useRef, useState } from 'react';
import { TodoAction, TodoItem, useTodo } from '../context/TodoContext';

export const addTodo = (todo: TodoItem): any => ({
  type: 'ADD',
  payload: todo
});

export const deleteTodo = (id: string): TodoAction => ({
  type: 'DELETE',
  payload: id
});

export const AddTodo = () => {
  const [input, setInput] = useState('');
  const { dispatch } = useTodo();

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    if (input.trim() === '') {
      return;
    }

    dispatch(
      addTodo({
        id: new Date().getTime().toString(),
        title: input,
        active: true
      })
    );
    setInput('');
  };

  const handleChange = (e: any) => {
    setInput(e.currentTarget.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <input type="text" value={input} onChange={handleChange} />
      <button type="submit">Add</button>
    </form>
  );
};
function TodoContext(TodoContext: any): {
  state: { todos: any };
  dispatch: any;
} {
  throw new Error('Function not implemented.');
}
