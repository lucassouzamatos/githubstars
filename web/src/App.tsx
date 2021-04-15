import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from 'globalStyles';
import Routes from 'routes';

import { RepositoriesDataProvider } from 'providers/RepositoriesDataProvider';

function App() {
  return (
    <RepositoriesDataProvider>
      <BrowserRouter>
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
    </RepositoriesDataProvider>
  );
}

export default App;
