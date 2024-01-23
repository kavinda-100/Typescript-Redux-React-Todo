import AddTodo from "../components/AddTodo"
import Todo from "../components/Todo"
import { useRef } from "react"

import { useAppSelector, useAppDispatch } from "../app/hooks"
import { deleteTodo, toggleComplete, addTodo } from "../features/todoSlice"

const Home = () => {
  // select the todos from the store
  const todos = useAppSelector((state) => state.todo.todos)
  // use the dispatch hook to dispatch an action
  const dispatch = useAppDispatch()
  // create a ref to the input element
  const inputRef = useRef<HTMLInputElement>(null)

  // create a function to handle the click event
  const handleClick = () => {
    // get the current value of the input element
    const title = inputRef.current?.value
    // check if the input element has a value
    if (title) {
        // create a new todo object
        dispatch(addTodo(title))
        // clear the input element
        inputRef.current.value = ""
    }
    return
  }

  return (
    <div className="w-full">
      <AddTodo 
        addTodo={handleClick}
        inputRef={inputRef}
        buttonText="Add Todo"
      />

      <div className="flex justify-center items-center my-4">
        <h1 className=" font-bold">TODO</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          {
            !todos.length ? (
              <div className="flex justify-center items-center">
                <p className="text-2xl font-bold">No todos found</p>
              </div>
            ) : (
              todos.map((todo) => (
                <Todo
                  key={todo.id}
                  id={todo.id}
                  text={todo.title}
                  date={todo.date}
                  completed={todo.completed}
                  handleDelete={() => dispatch(deleteTodo(todo.id))}
                  handleComplete={() => dispatch(toggleComplete({id: todo.id}))}
                />
              ))
            )
          }
      </div>
    </div>
  )
}

export default Home