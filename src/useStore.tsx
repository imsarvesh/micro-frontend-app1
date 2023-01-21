import { createContext, useContext, useEffect, useReducer } from "react";

const storeContext = createContext<any>({});
const dispatchContext = createContext<any>({});

export const StoreProvider = ({ children, reducer, initialState }: any) => {
  const [store, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const event = new CustomEvent<any>("STATE", {
      // @ts-ignore
      detail: store,
    });

    window.dispatchEvent(event);
  }, [store]);

  return (
    <dispatchContext.Provider value={dispatch}>
      <storeContext.Provider value={store}>{children}</storeContext.Provider>
    </dispatchContext.Provider>
  );
};

export function useStore() {
  return useContext(storeContext);
}

export function useDispatch() {
  return useContext(dispatchContext);
}
