import { createContext, useContext, useEffect, useReducer } from "react";

const storeContext = createContext<any>({});
const dispatchContext = createContext<any>({});

export const StoreProvider = ({ children, reducer, initialState }: any) => {
  const [store, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // @ts-ignore
    store?.onStateChange(store?.todos);
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
