import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'react-toastify/dist/ReactToastify.css';
import * as app from '../components';
import theme from './theme';

import createStore from '../store';

const store = createStore();

const App = () => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Provider store={store}>
      <app.Wrapper>

        <app.Header />
        
        <app.Dashboard />

        <ToastContainer />
        
      </app.Wrapper>
    </Provider>
  </MuiThemeProvider>
);

export default App;
