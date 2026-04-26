import { useTodoDetailQuery } from "@/hooks/quires/useTodoDetailQuery";
import { useParams } from "react-router";

const TodoDetailPage = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useTodoDetailQuery(id ?? "");
  if (isLoading) return <div>로딩 중 입니다 </div>;
  if (error || !data) return <div>오류 메시지입니다.</div>;

  return <div>{data.content} </div>;
};

export default TodoDetailPage;
