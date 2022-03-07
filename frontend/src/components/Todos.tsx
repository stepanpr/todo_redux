import React from 'react'
import { useState } from 'react'
import { TodoList } from './TodoList'
import { Todo } from '../models/models'
import { v4 as uuid } from 'uuid'

export const Todos: React.FC = () => {
//   const [todos, setTodos] = useState<string[]>([])
  const [todos, setTodos] = useState<Todo[]>([])

  const [input, setInput] = useState('')

  
  const handleChange = (e: any) => {
    setInput(e.target.value)
  }

  const addTodo = () => {
	if (input !== '') {
    	const newArr: Todo[] = [...todos, {id: uuid(), text: input, completed: false}]
		setTodos(newArr)
		setInput('')
	}
  }

  return (
    <div>
      <input type="text" onChange={handleChange} value={input} />
	  
      <button onClick={addTodo}>Добавить новую задачу</button>
      {/* <p>{input}</p> */}

      <ul>
		  {todos.map((todo, i) => (
			  <li key={i}>
				  {todo.text} - {todo.id}
			  </li>
		  ))}
	  </ul>
    </div>
  )
}
