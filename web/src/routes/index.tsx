import { Switch, Route } from 'react-router-dom';
import { MainPage, RepositoriesPage } from 'views';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route path="/repositories" exact component={RepositoriesPage} />
    </Switch>
  );
}
