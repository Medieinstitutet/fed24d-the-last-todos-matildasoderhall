import { useState } from "react"
import { Todo } from "../models/todo"
import { TodoPresentation } from "./TodoPresentation"
import { FilterTodos } from "./FilterTodos";
import type { Filter } from "../models/filter";
import { AddTodo } from "./AddTodo";
import { SortTodos } from "./SortTodos";
import type { SortValue } from "../models/sort";
  
export const Todos = () => {
    const defaultTodos = [
        new Todo("Clean"),
        new Todo("Cook dinner"),
        new Todo("Apply for schools"),
        new Todo("Read research"),
        new Todo("Book trip"),
    ]
    
    const [todos, setTodos] = useState<Todo[]>( JSON.parse(localStorage.getItem("todos") || JSON.stringify(defaultTodos)));

    const [filter, setFilter] = useState<Filter>("active");

    const [sortBy, setSortBy] = useState<SortValue>("newest");

    const filteredTodos = todos.filter(todo => {
        if (filter === "active") return !todo.done;
        if (filter === "done") return todo.done;
        return true;
    });

    const sortedTodos = [...filteredTodos].sort((a, b) => {
        if (sortBy === "alphabetical") return a.content.localeCompare(b.content);
        if (sortBy === "deadline") return (a.deadline ?? "").localeCompare(b.deadline ?? "");
        if (sortBy === "newest") return new Date(b.created).getTime() -  new Date(a.created).getTime();
        if (sortBy === "oldest") return new Date(a.created).getTime() -  new Date(b.created).getTime();
        return 0;
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
        <div className="flex justify-end gap-6">
            <SortTodos setSortBy={setSortBy} sortBy={sortBy}/>
            <FilterTodos setFilter={setFilter} currentFilter={filter} />
        </div>
        {sortedTodos.length === 0 ? (
            <p>{filter === "all" 
                ? "You have no todos" 
                : filter === "active" 
                ? "Great job! You finished all your todos"
                : "You haven't completed any todos yet"}</p>
            ) : (
            <ul className="grid grid-cols-5 gap-4">
                {sortedTodos.map((t) => (
                    <TodoPresentation removeTodo={removeTodo} handleChange={handleChange} key={t.id} todo={t}/>
                ))}
            </ul>
        )}
        <AddTodo addTodo={(todo) => setTodos(prev => [...prev, todo])} />
    </>
}