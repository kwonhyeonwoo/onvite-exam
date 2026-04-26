import type { ITodo } from "@/interfaces/todo-type";
import { API_URL } from "@/lib/constants";

export async function fetchTodos() {
    const response = await fetch(`${API_URL}/todos`);
    const data: ITodo[] = await response.json();
    return data;
}