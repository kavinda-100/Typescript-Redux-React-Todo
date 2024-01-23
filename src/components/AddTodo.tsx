
type AddTodoProps = {
  addTodo: () => void
  inputRef: React.RefObject<HTMLInputElement>
  buttonText: string
}

const AddTodo = ({addTodo, inputRef, buttonText}: AddTodoProps) => {
    
  return (
    <div className="flex flex-col lg:flex-row w-full">
        <input 
        ref={inputRef}
        type="text"
        placeholder="Todo"
        className="border border-gray-300 rounded-md p-2 m-2 lg:w-3/5"
         />
        <button
        className="border border-gray-300 rounded-md p-2 m-2 hover:bg-purple-600 transition duration-500"
        onClick={addTodo}
        >{buttonText}</button>
    </div>
  )
}

export default AddTodo