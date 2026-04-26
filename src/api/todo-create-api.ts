import type { ITodo } from "@/interfaces/todo-type";
import { API_URL } from "@/lib/constants";

export async function todoCreateApi(content: string) {
    const response = await fetch(`${API_URL}/todos`, {
        method: "POST",
        body: JSON.stringify({ content, isDone: false, }),
    })
    if (!response.ok) throw Error("Failed to create todo");

    const data: ITodo = await response.json();
    return data;
}