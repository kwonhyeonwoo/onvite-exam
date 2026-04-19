import { create } from "zustand";
import { combine } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
interface Todo {
    id: number;
    text: string;
}
const initialState: { todos: Todo[] } = {
    todos: []
}

const useTodoStore = create(
    immer(
        combine(initialState, (set) => ({
            addTodo: (text: string) => set((state) => {
                state.todos.push({
                    id: new Date().getTime(),
                    text,
                })
            }),
            removeTodo: (id: number) => set((state) => {
                state.todos = state.todos.filter((todo) => todo.id !== id);
            })
        }))
    )
);

export const useTodos = () => {
    const todos = useTodoStore(state => state.todos);
    return todos;
};

export const useAddTodo = () => {
    const addTodo = useTodoStore(state => state.addTodo)
    return addTodo
};

export const useRemoveTodo = () => {
    const removeTodo = useTodoStore(state => state.removeTodo);
    return removeTodo
}