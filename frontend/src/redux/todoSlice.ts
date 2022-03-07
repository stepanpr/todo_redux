import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ITodo } from '../models/models'
import { v4 as uuid } from 'uuid'

// const initialState: any = ['d','d'] //as Todo[]
const initialState = [] as ITodo[];

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
	  addTodo(state, action: PayloadAction<string>) {  
		if (action.payload !== '') {
			// const newArr: Todo[] = [...store, {id: uuid(), text: action.payload, completed: false}]
			const newTodo: ITodo = {id: uuid(), text: action.payload, completed: false}
			state.push(newTodo);
		}
	  },
	  removeTodo(state, action: PayloadAction<string>) {
		//   const n = state.map(todo => {
		// 	  todo.id !== action.payload
		//   })
		//   console.log(n)
		//   return [...n]/
		//   state = n
		//   return n
		// return state.filter(todo => {
		// 	todo.id === action.payload
		// })
		const index = state.findIndex((todo) => todo.id === action.payload);
		state.splice(index, 1);
	  },
	  setAsFinished(state, action: PayloadAction<{completed: boolean; id: string}>) {
		const index = state.findIndex((todo) => todo.id === action.payload.id);
		state[index].completed = action.payload.completed;
	  }
  },
})


export const { addTodo, removeTodo, setAsFinished } = todosSlice.actions;
export default todosSlice.reducer;