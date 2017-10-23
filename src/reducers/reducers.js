import { ADD_ONE } from '../actions';

const initialState = {};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ONE:
    console.log("HERE", action.type);
      return {
        ...state,
        myCounter: myCounter + 1
      }
    default:
      return state
  }
}

export { myReducer };
