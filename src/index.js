import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './css/index.css';
import './css/App.css';
import App from './app/App';
import store from './app/store';
import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
