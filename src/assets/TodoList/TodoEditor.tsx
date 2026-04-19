import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAddTodo } from "@/store/useTodoStore";
import React, { useState } from "react";

const TodoEditor = () => {
  const [content, setContent] = useState<string>("");
  const addTodo = useAddTodo();
  const handleAddTodo = () => {
    if (content.trim() === "") return;
    addTodo(content);
    setContent("");
  };
  return (
    <div className="flex gap-2">
      <Input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="오늘 할일을 적으세요..."
      />
      <Button onClick={handleAddTodo}>추가</Button>
    </div>
  );
};

export default TodoEditor;
