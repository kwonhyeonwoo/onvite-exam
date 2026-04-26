import { fetchTodoDetail } from "@/api/todo-detail-api";
import { useQuery } from "@tanstack/react-query";

export function useTodoDetailQuery(id: string) {
    return useQuery({
        queryKey: ["todo", id],
        queryFn: () => fetchTodoDetail(id),
        staleTime: 10000,
        gcTime: 5000

    })
}
