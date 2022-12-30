import React from 'react';
import {useStore} from './useStore'
import Todo from './Todo';
import AddTodo from './AddTodo'

export default function Todos () {
  const { todos } = useStore()
 
  return (
    <div>
      <AddTodo/>
      <br/>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  )
}