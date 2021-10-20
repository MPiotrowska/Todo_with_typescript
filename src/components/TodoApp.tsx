import { Todos } from './Todos';
import { AddTodo } from './AddTodo';
import '../styles.css';

export const TodoApp = () => {
  return (
    <div className="w-full pt-6  h-screen  bg-indigo-900 ">
      <div className="p-6 max-w-sm mx-auto rounded-xl shadow-md flex flex-col">
        <AddTodo />
        <Todos />
      </div>
    </div>
  );
};
