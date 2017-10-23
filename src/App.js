import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { myReducer } from './reducers';

import { Button, Display, ConnectedComponent } from './components';
import { makeGetRequest } from './helpers';

let store = createStore(myReducer);

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div>
          <h1>Hello from React!</h1>
          <Button
            label="Click me"
            onclick={makeGetRequest}
          />
          <Display />
          <ConnectedComponent />
        </div>
      </Provider>
    )
  };

}

export default App;
