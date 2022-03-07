import { createSlice } from '@reduxjs/toolkit'
import { Todo } from '../models/models'
import { v4 as uuid } from 'uuid'

const initialState: any = [] //as Todo[]

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
	  
  },
})


export const { } = todoSlice.actions;
export default todoSlice.reducer;