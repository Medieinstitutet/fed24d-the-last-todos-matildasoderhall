import { useEffect, useState } from "react"
import { Todo } from "../models/todo"
import { TodoPresentation } from "./TodoPresentation"
import { FilterTodos } from "./FilterTodos";
import type { Filter } from "../models/filter";

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

    const [filter, setFilter] = useState<Filter>("all");

    const filteredTodos = todos.filter(todo => {
        if (filter === "active") return !todo.done;
        if (filter === "done") return todo.done;
        return true;
    });

    useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const handleChange = (updated: Todo) => {
        setTodos(prev =>
            prev.map(todo => todo.id === updated.id ? updated : todo)
        );
    };

    const removeTodo = (id: number) => {
        setTodos(todos.filter((t) => t.id !== id));
    };

    return <>
        <FilterTodos setFilter={setFilter} currentFilter={filter} />
        <ul className="grid grid-cols-5 gap-4">
            {filteredTodos.map((t) => (
                <TodoPresentation 
                removeTodo={removeTodo} 
                handleChange={handleChange} 
                key={t.id} 
                todo={t}
                />
            ))}
        </ul>
    </>
}