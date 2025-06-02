import type { Filter } from "../models/filter";


type FilterTodosProps = {
    currentFilter: Filter;
    setFilter: (filter: Filter) => void;
}


export const FilterTodos = ({setFilter, currentFilter}: FilterTodosProps) => {
    return <>
        <label className="flex justify-end mb-4">
            <span className="mr-3">Show</span>
            <select value={currentFilter} onChange={(e) => setFilter(e.target.value as Filter)}>
                <option value="all">All</option>
                <option value="active">Active</option>
                <option value="done">Done</option>
            </select>
        </label>
    </>
}