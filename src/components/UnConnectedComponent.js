import React from 'react';

import { Button } from './';

const showState = () => {
  console.log(store.getState())
}

const UnConnectedComponent = (props) => (
  <div>
    <h1>Hello from the component</h1>
    <div>
      {JSON.stringify(props)}
    </div>
    <Button 
      label='Click me to change state'
      onclick={ showState }
    />
  </div>
);

export { UnConnectedComponent };
