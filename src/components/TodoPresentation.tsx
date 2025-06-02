import type { Todo } from "../models/todo"

type TodoPresentaionProps = {
    todo: Todo;
    handleChange: (updated: Todo) => void;
    removeTodo: (id: number) => void;
}

export const TodoPresentation = ({todo, handleChange, removeTodo}: TodoPresentaionProps) => {

    

    return <>
        <li>
            <article>
                <h2>{todo.content}</h2>
                <input type="checkbox" checked={todo.done} onChange={(e) => handleChange({...todo, done: e.target.checked})}/>
                <button onClick={() => removeTodo(todo.id)}>remove</button>
            </article>
        </li>
    </>
}