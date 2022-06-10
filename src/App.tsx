import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import Routers from './routes';
import GlobalStyle from './Assets/styles/GlobalStyles';
import store from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routers />
        <GlobalStyle />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
