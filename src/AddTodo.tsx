import React from "react";

import { useDispatch } from "./useStore";
import { Button } from "app2/Button";
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
        placeholder="Add New Task"
        onChange={(e) => setNewTodo(e.target.value)}
        value={newTodo}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}
