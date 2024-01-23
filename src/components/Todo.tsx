import { Link } from "react-router-dom"

type TodoProps = {
    id: string
    text: string
    date: string
    completed: boolean
    handleDelete: () => void
    handleComplete: () => void
}

const Todo = ({id, text, date, completed, handleComplete, handleDelete}: TodoProps) => {
  return (
    <div className="w-full flex flex-col justify-between shadow-sm shadow-purple-400 my-2">
        <div className="w-full px-3 py-2">
            <p className="font-bold text-nowrap">{text}</p>
        </div>
        <div className="flex justify-between items-center px-3 py-2">
            <div>
                <p>{date}</p>
            </div>
            <div className="flex space-x-2 items-center">
                <input 
                onChange={handleComplete}
                type="checkbox" 
                checked={completed}
                className="form-checkbox h-5 w-5 text-purple-600" />
                <button 
                onClick={handleDelete}
                className="border border-gray-300 bg-purple-600 rounded-md px-3 py-2 m-2 hover:bg-red-500 transition duration-500">Delete</button>
                <Link 
                to={`/update/${id}`}
                className="border border-gray-300 rounded-md px-3 py-2 m-2 hover:bg-purple-600 transition duration-500 ">Edit</Link>
            </div>
        </div>
    </div>
  )
}

export default Todo