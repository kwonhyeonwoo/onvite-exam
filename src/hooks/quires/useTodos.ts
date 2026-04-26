import { fetchTodos } from "@/api/todo-server";
import { useQuery } from "@tanstack/react-query";

export function useTodoDataQuery() {
    return useQuery({
        queryKey: ["todos"],
        queryFn: fetchTodos,
    })
}