import { useStore } from 'providers/store/StoreProvider';
import { useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { MainPage, RepositoriesPage } from 'views';

export default function Routes() {
  const history = useHistory();
  const { store } = useStore();

  useEffect(() => {
    history.push('/');
  }, []);

  useEffect(() => {
    if (store.auth.data.token) {
      history.push('/repositories');
    }
  }, [store.auth]);

  return (
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route path="/repositories" exact component={RepositoriesPage} />
    </Switch>
  );
}
