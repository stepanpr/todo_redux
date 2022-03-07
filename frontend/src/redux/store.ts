import React from "react";
import { createStore, configureStore } from "@reduxjs/toolkit";
import { todoSlice }  from './todoSlice'


export const store = configureStore({
	reducer: todoSlice.reducer
})