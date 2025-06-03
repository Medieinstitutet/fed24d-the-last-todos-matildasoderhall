import { useState, type FormEvent } from "react"
import { Todo } from "../models/todo";

type AddTodoProps = {
    addTodo: (todo: Todo) => void;
}

export const AddTodo = ({addTodo}: AddTodoProps) => {
    const [content, setContent] = useState("");
    const [deadline, setDeadline] = useState("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        
        const newTodo = new Todo(content, false, deadline)
        addTodo(newTodo);
        
        setContent("");
        setDeadline("")
    }

    return <>
        <div className="flex justify-center items-center p-19">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 border rounded-lg p-10">
                <h2 className="text-2xl">Add new todo</h2>
                <label className="flex gap-2">
                    <span>Task name</span>
                    <input type="text" name="content" value={content} onChange={(e) => setContent(e.target.value)} className="border rounded border-gray-400"/>
                </label>
                <label className="flex gap-4">
                    <span>Deadline?</span>
                    <input type="date" name="deadline" value={deadline} onChange={(e) => setDeadline(e.target.value)} className="border rounded border-gray-400"/>
                </label>
                <button className="w-fit px-8 py-1 rounded bg-lime-100 self-center">Add</button>
            </form>
        </div>
    </>
}