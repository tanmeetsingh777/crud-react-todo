import React, { useState } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import TodoCard from './components/TodoCard'
import './App.css'

const App = () => {

  const [list, setlist] = useState([])
  const [todoValue, setTodoValue] = useState('')

  function HandleTodos(newTodo) {
    setlist([...list, newTodo])
  }

  function handleDelete(index) {
    const newlist = list.filter((item, idx) => {
      return idx !== index
    })
    setlist(newlist)
  }

  function handleEdit(index) {
    const valueToEdit = list[index];
    setTodoValue(valueToEdit);
    handleDelete(index);
  }
  return (
    <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} HandleTodos={HandleTodos} />
      <TodoList list={list} handleDelete={handleDelete} handleEdit={handleEdit} />
    </>

  )
}

export default App
