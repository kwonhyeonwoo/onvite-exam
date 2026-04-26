import { Button } from "@/components/ui/button";
import { useRemoveTodo } from "@/store/useTodoStore";
import React from "react";
import { Link } from "react-router";

interface Props {
  content: string;
  id: string;
  isDone: boolean;
}
const TodoItem = ({ id, content, isDoen }: Props) => {
  const removeTodo = useRemoveTodo();
  const handleRemoveTodo = () => {
    removeTodo(id);
  };

  return (
    <div className="item-center flex justify-between rounded-[8px] border p-4">
      <Link to={`/todolist/${id}`}>{content}</Link>
      <Button variant={"destructive"} onClick={handleRemoveTodo}>
        삭제
      </Button>
    </div>
  );
};

export default TodoItem;
