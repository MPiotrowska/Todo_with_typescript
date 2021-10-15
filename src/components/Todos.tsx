import { useTodo } from '../context/TodoContext';

export const Todos = () => {
  const {
    state: { todos },
    dispatch
  } = useTodo();

  return todos.length > 0 ? (
    <ul>
      {todos.map((item: any) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  ) : (
    <h2>No Todo's!</h2>
  );
};
