import {combineReducers} from 'redux';

import {ADD_FORM} from './actions';

//  Reducer to create new form
const formReducer = (state = [], action) => {
  if (action.type === ADD_FORM) {
    return action.payload;
  }
  return state;
};

const reducer = combineReducers({
  forms: formReducer,
});

export default reducer;
