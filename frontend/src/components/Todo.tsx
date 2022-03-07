import React from "react";
import { useState } from "react";
import { TodoList }  from './TodoList'

export const Todo: React.FC = () => {

	const [todos, setTodos ] = useState([])
	const [input, setInput] = useState('')

	const handleChange = (e: any) => {
		setInput(e.target.value)
	}

	return (
		<div>
			<input type="text" onChange={handleChange} />

			<p>{input}</p>
		</div>
	)
}