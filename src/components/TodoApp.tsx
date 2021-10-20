import { Todos } from './Todos';
import { AddTodo } from './AddTodo';
import '../styles.css';

export const TodoApp = () => {
  return (
    <div className="w-full p-6  h-screen  bg-indigo-600 ">
      <div className="bg-gray-900 p-6 max-w-md mx-auto rounded-xl shadow-md flex flex-col">
        <div className=" mb-2 font-bold text-3xl  text-white flex justify-center">
          Plan your day
        </div>
        <AddTodo />
        <Todos />
      </div>
    </div>
  );
};
