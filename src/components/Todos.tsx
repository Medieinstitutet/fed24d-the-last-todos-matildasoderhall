import { useState } from "react"
import { Todo } from "../models/todo"
import { TodoPresentation } from "./TodoPresentation"
import { FilterTodos } from "./FilterTodos";
import type { Filter } from "../models/filter";
import { AddTodo } from "./AddTodo";

  

export const Todos = () => {
    const defaultTodos = [
        new Todo("Clean"),
        new Todo("Cook dinner"),
        new Todo("Apply for schools"),
        new Todo("Read research"),
        new Todo("Book trip"),
    ]
    
    const [todos, setTodos] = useState<Todo[]>( JSON.parse(localStorage.getItem("todos") || JSON.stringify(defaultTodos)) 
    );

    const [filter, setFilter] = useState<Filter>("all");

    const filteredTodos = todos.filter(todo => {
        if (filter === "active") return !todo.done;
        if (filter === "done") return todo.done;
        return true;
    });

    const handleChange = (updated: Todo) => {
        setTodos(prev =>
            prev.map(todo => todo.id === updated.id ? updated : todo)
        );
    };

    const removeTodo = (id: number) => {
        setTodos(todos.filter((t) => t.id !== id));
    };

    localStorage.setItem("todos", JSON.stringify(todos));

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
        <AddTodo addTodo={(todo) => setTodos(prev => [...prev, todo])} />
    </>
}