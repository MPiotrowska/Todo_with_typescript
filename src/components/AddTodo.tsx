import { FormEvent, useState } from 'react';
import { TodoItem, useTodo } from '../context/TodoContext';
import '../styles.css';

export const addTodo = (todo: TodoItem): any => ({
  type: 'ADD',
  payload: todo
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
      <input
        className=" h-7 bg-indigo-900 border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Add to do"
      />
      <button
        className="text-white bg-purple-500 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 h-7 w-12 "
        type="submit"
      >
        Add
      </button>
    </form>
  );
};
