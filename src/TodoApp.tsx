import reducer from "./reducer";
import Todos from "./Todos";
import { StoreProvider } from "./useStore";

const initialState = {
  todos: [{ id: 1, name: "Task 1", completed: false }],
};

function TodoApp({ onStateChange }: { onStateChange?: any; }) {
  
  return (
    <StoreProvider
      reducer={reducer}
      initialState={{ ...initialState, onStateChange }}
    >
      <Todos />
    </StoreProvider>
  );
}

export default TodoApp;
