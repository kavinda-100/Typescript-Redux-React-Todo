import { createSlice, PayloadAction , nanoid} from "@reduxjs/toolkit";

type Todo = {
    id: string;
    title: string;
    date: string;
    completed: boolean;
};

type TodoState = {
    todos: Todo[];
};

const initialState: TodoState = {
    todos: [],
};

const getDate = () => {
    const date = new Date();
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
}

const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers: {
        addTodo :{
            reducer(state, action: PayloadAction<Todo>){
                state.todos.push(action.payload);
            },
            prepare(title: string){
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        date: getDate(),
                        completed: false,
                    }
                }
            }
        },
        deleteTodo: (state, action: PayloadAction<string>) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        toggleComplete: (state, action: PayloadAction<{id: string}>) => {
            state.todos = state.todos.map((todo) => {
                if(todo.id === action.payload.id){
                    return {
                        ...todo,
                        completed: !todo.completed,
                    }
                }
                return todo;
            });
        },
        updateTodo: (state, action: PayloadAction<{id: string, title: string}>) => {
            state.todos = state.todos.map((todo) => {
                if(todo.id === action.payload.id){
                    return {
                        ...todo,
                        date: getDate(),
                        title: action.payload.title,
                    }
                }
                return todo;
            });
        },
    }
    }
);

export const { addTodo, deleteTodo, toggleComplete, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
