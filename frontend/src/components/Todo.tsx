import React from 'react'
import { useState } from 'react'
import { TodoList } from './TodoList'

export const Todo: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([])
  const [input, setInput] = useState('')

  
  const handleChange = (e: any) => {
    setInput(e.target.value)
  }

  const addTodo = () => {
    const newArr = [...todos, input]
    setTodos(newArr)
	setInput('')
  }

  return (
    <div>
      <input type="text" onChange={handleChange} value={input} />
      <button onClick={addTodo}>Добавить новую задачу</button>
      {/* <p>{input}</p> */}

      <ul>
		  {todos.map((todo, i) => (
			  <li key={i}>
				  {todo}
			  </li>
		  ))}
	  </ul>
    </div>
  )
}
