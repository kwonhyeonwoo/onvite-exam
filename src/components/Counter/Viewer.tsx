import { useCount } from "@/store/counterStore";

const Viewer = () => {
  const count = useCount();
  return <div>{count}</div>;
};

export default Viewer;
