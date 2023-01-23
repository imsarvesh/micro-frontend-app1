import React, { useRef } from "react";

export default function Todo() {
  const todoRef = useRef();

  const [newTodo, setNewTodo] = React.useState<string>();

  const addTodo = (e) => {
    e.preventDefault();

    const addTodo = new CustomEvent("ADD_TODO", {
      detail: {
        todo: { name: newTodo, id: new Date().getTime(), completed: false },
      },
    });
    window.dispatchEvent(addTodo);

    setNewTodo("");
    // @ts-ignore
    todoRef.current.focus();
  };

  return (
    <form onSubmit={addTodo}>
      <input
        ref={todoRef}
        type="text"
        placeholder="Add New"
        onChange={(e) => setNewTodo(e.target.value)}
        value={newTodo}
      />
    </form>
  );
}
