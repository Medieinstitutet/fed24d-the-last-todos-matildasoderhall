import type { Todo } from "../models/todo"

type TodoPresentaionProps = {
    todo: Todo;
    handleChange: (updated: Todo) => void;
    removeTodo: (id: number) => void;
}

export const TodoPresentation = ({todo, handleChange, removeTodo}: TodoPresentaionProps) => {

    

    return <>
        <li className="rounded-md border border-gray-300 bg-lime-100 p-4">
            <article className="flex flex-col gap-2">
                <div className="flex justify-end">
                    <button className="bg-gray-50 px-3 py-1 rounded" onClick={() => removeTodo(todo.id)}>X</button>
                </div>
                <div className="flex items-center gap-2">
                    <input type="checkbox" checked={todo.done} onChange={(e) => handleChange({...todo, done: e.target.checked})}/>
                    <h2 className={`text-lg ${todo.done ? "line-through text-gray-500" : ""}`}>{todo.content}</h2>
                </div>
                {todo.deadline && (
                    <p className="flex">Deadline: {new Date(todo.deadline).toLocaleDateString()}</p>
                )}  
            </article>
        </li>
    </>
}