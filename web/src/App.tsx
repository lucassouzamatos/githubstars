import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from 'globalStyles';
import Routes from 'routes';

import { StoreProvider } from 'providers/store/StoreProvider';

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
