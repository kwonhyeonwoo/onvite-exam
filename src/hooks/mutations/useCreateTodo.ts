import { todoCreateApi } from "@/api/todo-create-api";
import { useMutation } from "@tanstack/react-query";

export function useCreateTodo() {
    return useMutation({
        mutationFn: todoCreateApi,
        onSuccess: () => {
            alert('Create Todo Success!!')
        },
        onError: (error) => {
            alert(error);
        },
        onSettled: () => { },
        onMutate: () => { },
    })
}