import React from "react";

import { useDispatch } from "./useStore";

export default function Todo({ todo }) {
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch({
      type: "toggleTodo",
      id: todo.id,
    });
  };

  return (
    <div>
      <label>
        <input
          checked={todo.completed}
          onChange={handleChange}
          type="checkbox"
        />
        <span>{todo.completed ? <del>{todo.name}</del> : todo.name}</span>
      </label>
    </div>
  );
}
