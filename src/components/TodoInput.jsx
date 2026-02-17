import React from 'react'

export default function TodoInput(props) {
  const { HandleTodos, todoValue, setTodoValue } = props
  return (
    <>
      <header>
        <input value={todoValue} onChange={(e) => setTodoValue(e.target.value)} type='text' placeholder='Add a New ToDo...'></input>
        <button onClick={() => { HandleTodos(todoValue); setTodoValue(''); }}>Add</button>
      </header>
    </>
  )
}
