import "./App.css";
import reducer from "./reducer";
import Todos from "./Todos";
import { StoreProvider } from "./useStore";

const initialState = {
  todos: [{ id: 1, name: "Task 1", completed: false }],
};

// @ts-check

function App({ cb }: { cb?: any }) {
  return (
    <StoreProvider reducer={reducer} initialState={{ ...initialState, cb }}>
      <Todos />
    </StoreProvider>
  );
}

export default App;
