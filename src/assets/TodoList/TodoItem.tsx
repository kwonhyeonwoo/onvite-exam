import { Button } from "@/components/ui/button";
import { useRemoveTodo } from "@/store/useTodoStore";
import React from "react";

interface Props {
  id: number;
  text: string;
}
const TodoItem = ({ id, text }: Props) => {
  const removeTodo = useRemoveTodo();
  const handleRemoveTodo = () => {
    removeTodo(id);
  };

  return (
    <div className="item-center flex justify-between rounded-[8px] border p-4">
      {text}
      <Button variant={"destructive"} onClick={handleRemoveTodo}>
        삭제
      </Button>
    </div>
  );
};

export default TodoItem;
