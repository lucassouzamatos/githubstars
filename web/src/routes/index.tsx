import { Switch, Route } from 'react-router-dom';
import { MainPage } from 'views';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={MainPage} />
    </Switch>
  );
}
