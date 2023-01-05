import React from "react";
import { useDispatch } from "./useStore";

export default function Todo() {
  const [newTodo, setNewTodo] = React.useState<string>();
  const dispatch = useDispatch();

  const addTodo = (e) => {
    e.preventDefault();
    dispatch({
      type: "addTodo",
      todo: {
        name: newTodo,
      },
    });
    setNewTodo("");
  };

  return (
    <form onSubmit={addTodo}>
      <input
        type="text"
        placeholder="Add New"
        onChange={(e) => setNewTodo(e.target.value)}
        value={newTodo}
      />
    </form>
  );
}
