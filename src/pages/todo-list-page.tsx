import { useTodoDataQuery } from "@/hooks/quires/useTodos";
import TodoEditor from "@/components/TodoList/TodoEditor";
import TodoItem from "@/components/TodoList/TodoItem";

const TodoListPage = () => {
  const { data: todos, isLoading, error } = useTodoDataQuery();

  if (isLoading) return <div>로딩 중 입니다..</div>;
  if (error) return <div>오류 메시지입니다.</div>;
  return (
    <div className="flex flex-col gap-5 p-4">
      <h1 className="text-2sx font-bold">Todo List</h1>
      <TodoEditor />
      {todos?.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </div>
  );
};

export default TodoListPage;

// 캐싱매커니즘
// 1. 캐싱 기능으로 앱을 최적화 할 수 있다
// 2. 적절한 타이밍에 데이터를 갱신하고 삭제할 수 있다.
// fetching -> fresh -> stale -> refetching -> fresh
// fetching: 데이터를 불러오는 중
// fresh: 데이터 최신 상태
// stale: 데이터가 오래 된 상태 (유통기한이 지난 상태라고 보면 이해하기 쉬움)
// stale이 오래되면 반복적으로 refetching을 요청하게된다. 즉 순환구조를 갖게 된다는 것 이다.

// Dev Tools 사용법
// Dev tools는 데이터의 상태를 실시간으로 관리해주는 라이브러리이다 (시각화해서 보여준다.)
// install -> yarn add @tanstack/react-query-devtools
// main.ts에 import 추가 (ReqctQueryDevtools)
