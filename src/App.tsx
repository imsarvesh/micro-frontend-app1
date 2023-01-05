import "./App.css";
import reducer from "./reducer";
import Todos from "./Todos";
import { StoreProvider } from "./useStore";

const initialState = {
  todos: [{ id: 1, name: "Task 1", completed: false }],
};



function App() {
  return (
    <StoreProvider reducer={reducer} initialState={{ ...initialState }}>
      <Todos />
    </StoreProvider>
  );
}

export default App;
