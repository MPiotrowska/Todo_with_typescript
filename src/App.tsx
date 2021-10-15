import './styles.css';
import { Todos } from './components/Todos';
import { TodoProvider } from './context/TodoContext';
import { AddTodo } from './components/AddTodo';

export default function App() {
  return (
    <TodoProvider>
      <AddTodo />
      <Todos />
    </TodoProvider>
  );
}
