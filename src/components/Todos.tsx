import { useEffect, useState } from "react"
import { Todo } from "../models/todo"
import { TodoPresentation } from "./TodoPresentation"

export const Todos = () => {

    const [todos, setTodos] = useState<Todo[]>(() => {
        const stored = localStorage.getItem("todos");
        return stored 
        ? JSON.parse(stored).map((t: { content: string; done: boolean; id: number }) =>
            new Todo(t.content, t.done, t.id)) 
        : [
            new Todo("Clean"),
            new Todo("Cook dinner"),
            new Todo("Apply for schools"),
            new Todo("Read research"),
            new Todo("Book trip"),
        ];
    });

    useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const handleChange = (updated: Todo) => {
        setTodos(prev =>
            prev.map(todo => todo.id === updated.id ? updated : todo)
        );
    };

    console.log(todos);
    return <>
        <ul>
            {todos.map((t) => (<TodoPresentation handleChange={handleChange} key={t.id} todo={t}/>))}
        </ul>
        
    </>
}