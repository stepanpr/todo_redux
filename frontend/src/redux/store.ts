import React from 'react'
import { createStore, configureStore } from '@reduxjs/toolkit'
import { todosSlice } from './todoSlice'
import todosReducer from './todoSlice'

export const store = configureStore({
  reducer: todosSlice.reducer,
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>








import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
// import type { RootState, AppDispatch } from './store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector