import test from 'blue-tape';
import { ADD_ONE, addOne } from './';

test('Action should be of right shape', (t)=> {
  const expectedAction = {
    type: ADD_ONE
  };
  t.deepEquals(expectedAction, addOne()); 
  t.end();
});
