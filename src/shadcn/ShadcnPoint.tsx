import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const ShadcnPoint = () => {
  return (
    <div className="flex flex-col gap-y-8 p-10">
      {/* Alert Dialog */}
      <AlertDialog>
        <AlertDialogTrigger>Open Alert Dialog</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Alert Dialog Title</AlertDialogTitle>
            <AlertDialogDescription>
              Alert Dialog Description
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Dialog 모달 창 */}
      <Dialog>
        <DialogTrigger>Open Dialog</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Dialog Title</DialogTitle>
            <DialogDescription>Dialog Description</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button>Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* carousel -> 슬라이드 컴포넌트  */}
      <Carousel className="m-4">
        <CarouselContent>
          <CarouselItem className="flex justify-center bg-red-500 text-white">
            1
          </CarouselItem>
          <CarouselItem>2</CarouselItem>
          <CarouselItem>3</CarouselItem>
          <CarouselItem>4</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

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
