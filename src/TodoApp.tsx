import reducer from "./reducer";
import Todos from "./Todos";
import { StoreProvider } from "./useStore";

const initialState = {
  todos: [{ id: 1, name: "Task 1", completed: false }],
};

function TodoApp() {
  return (
    <StoreProvider reducer={reducer} initialState={initialState}>
      <Todos />
    </StoreProvider>
  );
}

export default TodoApp;
