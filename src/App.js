import React from 'react';

import { Button, Display } from './components';
import { makeGetRequest } from './helpers';

const App = () => (
  <div>
    <h1>Hello from React!</h1>
    <Button
      label="Click me"
      onclick={makeGetRequest}
    />
    <Display />
  </div>
);

export default App;
