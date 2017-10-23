import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { myReducer } from './reducers';

let store = createStore(myReducer);

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
