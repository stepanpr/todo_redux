import React from 'react'
import { useState } from 'react'
import { TodoList } from './TodoList'
import { ITodo } from '../models/models'
import { v4 as uuid } from 'uuid'
import { useDispatch, useSelector } from 'react-redux'
import { useAppDispatch, useAppSelector, RootState } from '../redux/store'
import { addTodo, removeTodo, setAsFinished } from '../redux/todoSlice'

export const Todos: React.FC = () => {
//   const [todos, setTodos] = useState<ITodo[]>([])

  const [input, setInput] = useState('')

  const stateTodos = useSelector((state: RootState) => state);
  const dispatch = useDispatch()

  
  const handleChange = (e: any) => {
    setInput(e.target.value)
  }

  const handleClick = () => {
	if (input !== '') {
    // 	const newArr: Todo[] = [...todos, {id: uuid(), text: input, completed: false}]
	// 	setTodos(newArr)
	dispatch(addTodo(input))
	setInput('')
	}
  }

  return (
    <div>
      <input type="text" onChange={handleChange} value={input} />

      <button onClick={handleClick}>Добавить новую задачу</button>
      {/* <p>{input}</p> */}

      <ul>
		  {stateTodos && stateTodos.map((todo: any, i: number) => (
			  <li key={todo.id}>
				  {todo.text} - {todo.id} <span onClick={() => dispatch(removeTodo(todo.id))}>DEL</span>
				  <input type="checkbox" value={todo.completed} onChange={() => dispatch(setAsFinished({ completed: !todo.completed, id: todo.id }))}/>
				{/* {console.log(todo.completed)} */}
			  </li>
		  )).reverse()}
	  </ul>
    </div>
  )
}
