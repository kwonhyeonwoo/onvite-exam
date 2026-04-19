import TodoEditor from "@/assets/TodoList/TodoEditor";
import TodoItem from "@/assets/TodoList/TodoItem";
import { useTodos } from "@/store/useTodoStore";

const TodoListPage = () => {
  const todos = useTodos();
  return (
    <div className="flex flex-col gap-5 p-4">
      <h1 className="text-2sx font-bold">Todo List</h1>
      <TodoEditor />
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </div>
  );
};

export default TodoListPage;
