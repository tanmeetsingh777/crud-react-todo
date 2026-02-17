import React from 'react'
import TodoCard from './TodoCard';

export default function TodoList(props) {
  const { list, handleDelete, handleEdit } = props;
  return (
    <ul className="main">
      {list.map((item, index) => {
        return (
          <TodoCard {...props} key={index} index={index}>
            <p>{item}</p>
          </TodoCard>

        )
      })}
    </ul>

  )
}
