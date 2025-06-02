import type { Todo } from "../models/todo"

type TodoPresentaionProps = {
    todo: Todo;
    handleChange: (updated: Todo) => void;
}

export const TodoPresentation = ({todo, handleChange}: TodoPresentaionProps) => {

    

    return <>
        <li>
            <article>
                <h2>{todo.content}</h2>
                <input type="checkbox" checked={todo.done} onChange={(e) => handleChange({...todo, done: e.target.checked})}/>
            </article>
        </li>
    </>
}