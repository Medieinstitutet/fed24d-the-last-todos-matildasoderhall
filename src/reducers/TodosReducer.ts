import { Todo } from "../models/todo";

// type TodosActions = {
//     type: string;
//     payload: string;
// }

type TodosActions = 
    | { type: "ADDED", payload: Todo}
    | { type: "REMOVED", payload: number}
    | { type: "TOGGLED", payload: number};

export const TodosReducer = (todos: Todo[], action: TodosActions) => {

    if (action.type === "ADDED") {
        return [...todos, action.payload]
    }

    if (action.type === "REMOVED") {
        return todos.filter((t) => t.id !== action.payload)
    }

    if (action.type === "TOGGLED") {  
        return todos.map((t) => {
            if (t.id === action.payload) return {...t, done: !t.done}
            return t;
        })
    }

    return todos;
}