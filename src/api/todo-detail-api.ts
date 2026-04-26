import type { ITodo } from "@/interfaces/todo-type";
import { API_URL } from "@/lib/constants";

export async function fetchTodoDetail(id: string) {
    const response = await fetch(`${API_URL}/todos/${id}`);
    const data: ITodo = await response.json();
    return data;
}