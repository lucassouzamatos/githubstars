/* eslint-disable @typescript-eslint/no-empty-function */
import { useContext, createContext, Dispatch } from 'react';
import useCombinedReducers, {
  CombinedReducer,
  CombinedAction,
} from './useCombinedReducers';

const StoreContext = createContext<{
  store: CombinedReducer;
  dispatch: Dispatch<CombinedAction>;
}>({
  store: {
    repositories: { data: [] },
  },
  dispatch: () => {},
});

const StoreProvider = (props) => {
  const [store, dispatch] = useCombinedReducers();

  return (
    <StoreContext.Provider
      value={{
        store,
        dispatch,
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};

function useStore() {
  const context = useContext(StoreContext);

  if (!context) {
    throw new Error(`useStore must be used within an ApiProvider`);
  }

  return context;
}

export { StoreProvider, useStore };
