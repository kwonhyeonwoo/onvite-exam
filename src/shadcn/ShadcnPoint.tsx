import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const ShadcnPoint = () => {
  return (
    <div className="flex flex-col gap-y-8 p-10">
      {/* 버튼 디자인모음, variant로 디자인 변경 가능 */}
      <div>
        <Button
          onClick={() =>
            toast("토스트 메시지", {
              position: "top-center",
              description: "여기는 sub 내용?",
            })
          }
          variant={"default"}
        >
          버튼
        </Button>
        <Button variant={"destructive"}>destructive</Button>
        <Button variant={"ghost"}>ghost</Button>
        <Button variant={"outline"}>outline</Button>
        <Button variant={"link"}>link</Button>
        <Button variant={"secondary"}>secondary</Button>
      </div>

      {/* input */}
      <div>
        <Input placeholder="입력..." onChange={(e) => e.target.value} />
      </div>

      {/* sonner (토스트 메시지) */}
    </div>
  );
};
export default ShadcnPoint;
