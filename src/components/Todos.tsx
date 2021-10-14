import { useContext} from 'react'
import { Context as TodoContext } from "../context/TodoContext";


export const Todos =() => {
const {
    state: {todos}
}= useContext(TodoContext)

return todos.length > 0 ? (
    <ul>
      {todos.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  ) : (
    <h2>No Todo's!</h2>
  );
};