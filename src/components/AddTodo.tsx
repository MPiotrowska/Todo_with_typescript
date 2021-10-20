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
    <form onSubmit={submitHandler} className=" mb-2 pt-2 flex justify-center ">
      <input
        className="text-white h-9 p-3 bg-gray-900 border-2 border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Add to do"
      />
      <button
        className="text-white bg-gradient-to-r from-purple-500 to-indigo-600  hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 h-9 w-20 "
        type="submit"
      >
        Add
      </button>
    </form>
  );
};
