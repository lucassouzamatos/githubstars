import React, { useContext } from 'react';

type ContextState = {
  loading: boolean;
  data: string[];
};

const RepositoriesContext = React.createContext<ContextState | null>(null);

const RepositoriesDataProvider = (props) => {
  const [state, setState] = React.useState<ContextState>({
    loading: false,
    data: [],
  });

  React.useEffect(() => {
    setState({ loading: true, data: ['test', 'kubernetes'] });
  }, []);

  return (
    <RepositoriesContext.Provider value={state}>
      {props.children}
    </RepositoriesContext.Provider>
  );
};

function useRepositories() {
  const context = useContext(RepositoriesContext);

  if (!context) {
    throw new Error(`useApi must be used within an ApiProvider`);
  }

  return context;
}

export { RepositoriesDataProvider, useRepositories };
