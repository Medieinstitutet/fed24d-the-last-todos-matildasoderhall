import type { SortValue } from "../models/sort";

type SortTodosProps = {
    sortBy: SortValue; 
    setSortBy: (value: SortValue) => void;
}

export const SortTodos = ({sortBy, setSortBy}: SortTodosProps) => {


    return <>
        <label className="flex justify-end mb-4 border border-gray-300 rounded p-1 shadow-sm">
            <span className="mr-3">Sort</span>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value as SortValue)}>
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="deadline">Deadline</option>
                <option value="alphabetical">a-z</option>
            </select>
        </label>
    </>
}