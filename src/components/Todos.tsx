import { TodoAction, useTodo } from '../context/TodoContext';
import recycle from '../assets/recycle-bin.svg';

export const deleteTodo = (id: string): TodoAction => ({
  type: 'DELETE',
  payload: id
});

export const Todos = () => {
  const {
    state: { todos },
    dispatch
  } = useTodo();

  const deleteHandler = (id: string) => dispatch(deleteTodo(id));

  return todos.length > 0 ? (
    <ul>
      {todos.map((item: any) => (
        <li
          className=" flex justify-between mt-4 p-3 rounded text-white transition duration-500 ease-in-out bg-gradient-to-r from-purple-600 via-pink-600 to-red-500  transform hover:-translate-y-1 hover:scale-110 "
          key={item.id}
        >
          {item.title}
          <button onClick={() => deleteHandler(item.id)}>
            <img src={recycle} alt="bin" className="w-4 h-4" />
          </button>
        </li>
      ))}
    </ul>
  ) : (
    <h2 className="text-white pt-4">No Todo's!</h2>
  );
};
