import React, { useEffect, useState } from "react";
import Todo from "./Todo";

export default function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // @ts-ignore
    window.addEventListener("ADD_TODO", ({ detail }) => {
      setTodos((prevTodos) => [...prevTodos, detail.todo]);
    });
    window.addEventListener("UPDATE_TODO", ({ detail }: any) => {
      setTodos((prevTodos) => {
        const todoIndex = prevTodos.findIndex(
          (todo) => todo.id === detail.todo.id
        );
        prevTodos[todoIndex] = detail.todo;
        return [...prevTodos];
      });
    });

    return () => {
      // @ts-ignore
      // event.unsubscribe("ADD_TODO", listener);
    };
  }, []);

  return (
    <div>
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} />
      ))}
    </div>
  );
}
