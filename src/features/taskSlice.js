import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    tasks: [
        {id: 1,title: "Shakib", description: "Hello World",dueDate:"2024-02-02",completed:false},
        
    ]
}



export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: (state, action) => {
            const task = {
                id: nanoid(),
                title: action.payload.title,
                description: action.payload.description,
                dueDate: action.payload.dueDate,
                completed: action.payload.completed,
            }
            state.tasks.push(task)
        },
        removeTask: (state, action) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload )
        },
        updateTask: (state, action) =>{
            state.tasks = state.tasks.map((task) => task.id ===action.payload ? action.payload:task)
        },
        taskStatus: (state, action) => {
            state.tasks = state.tasks.map((task) => task.id === action.payload ? {...task, completed: !task.completed}:task)
        },
    }
})

export const {addTask, removeTask,updateTask,taskStatus} = taskSlice.actions

export default taskSlice.reducer