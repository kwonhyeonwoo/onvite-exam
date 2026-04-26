import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCreateTodo } from "@/hooks/mutations/useCreateTodo";
import { useState } from "react";

const TodoEditor = () => {
  const [content, setContent] = useState<string>("");
  const { mutate, isPending } = useCreateTodo();
  const handleAddTodo = () => {
    if (content.trim() === "") return;
    setContent("");
    mutate(content);
  };
  return (
    <div className="flex gap-2">
      <Input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="오늘 할일을 적으세요..."
      />
      <Button disabled={isPending} onClick={handleAddTodo}>
        추가
      </Button>
    </div>
  );
};

export default TodoEditor;
