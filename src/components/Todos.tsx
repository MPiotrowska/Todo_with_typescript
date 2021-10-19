import { TodoAction, useTodo } from '../context/TodoContext';

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
        <li key={item.id}>
          {item.title}-<button onClick={() => deleteHandler(item.id)}>x</button>
        </li>
      ))}
    </ul>
  ) : (
    <h2>No Todo's!</h2>
  );
};
