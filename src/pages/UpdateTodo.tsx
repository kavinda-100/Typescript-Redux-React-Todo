import { useParams, Link, useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { updateTodo } from "../features/todoSlice"
import { useRef } from "react"
import AddTodo from "../components/AddTodo"

const UpdateTodo = () => {
  // navigate
  const navigate = useNavigate()

  const { id } = useParams<{ id: string }>()
  // todos
  const todos = useAppSelector((state) => state.todo.todos)
  // dispatch
  const dispatch = useAppDispatch()
  // find todo by id
  const todo = todos.find((todo) => todo.id === id)
 // ref
  const titleRef = useRef<HTMLInputElement>(null)

  // update todo
  const update = () => {
    // check if titleRef is not null or undefined
    if (titleRef.current?.value === "") return
    // dispatch updateTodo
    if(todo) {
      dispatch(updateTodo({
        id: todo.id,
        title: titleRef.current?.value!,
      }))
      // navigate to home after updating 1.5s later
      setTimeout(() => {
        navigate("/")
      }, 1500)
    }
  }

  return (
    <div className="w-full">
      <div className="w-full p-2">
        <h1 className="text-md lg:text-lg font-bold text-start">Previous Todo</h1>
        <p className=" text-nowrap text-start font-semibold text-gray-400">{todo?.title}</p>
      </div>
      {
        !todo ? (<h1 className="text-2xl text-center">Todo not found</h1>):
        (
        <AddTodo
            buttonText="Update Todo"
            inputRef={titleRef}
            addTodo={update}
          />
        )
      }
      <div className="flex justify-center lg:justify-start items-center my-4">
          <Link 
            to="/" 
            className="border border-gray-300 rounded-md p-2 m-2 hover:bg-purple-600 transition duration-500">
              Go Back
          </Link>
        </div>
    </div>
  )
}

export default UpdateTodo