export default function Todo({ todo }) {
  const handleChange = (event) => {
    const UPDATE_TODO = new CustomEvent("UPDATE_TODO", {
      detail: {
        todo: { ...todo, completed: event.target.checked },
      },
    });
    window.dispatchEvent(UPDATE_TODO);
  };

  return (
    <div>
      <label>
        <input
          // checked={todo.completed}
          onChange={handleChange}
          type="checkbox"
        />
        <span>&nbsp;{todo.completed ? <del>{todo.name}</del> : todo.name}</span>
      </label>
    </div>
  );
}
