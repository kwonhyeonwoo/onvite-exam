import { Button } from "../ui/button";
import { useDecrease, useIncrease } from "@/store/counterStore";

const Controller = () => {
  const increase = useIncrease();
  const decrease = useDecrease();
  return (
    <div>
      <Button onClick={decrease}>-</Button>
      <Button onClick={increase}>+</Button>
    </div>
  );
};

export default Controller;
