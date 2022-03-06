import { createSlice } from "@reduxjs/toolkit"
import { Todo } from "../models"
import { v4 as uuid } from 'uuid'

const initialState: any = [] //as Todo[]

const todoSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {

	}
})