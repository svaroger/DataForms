import {combineReducers} from 'redux';

import {ADD_FORM, ADD_FORM_BOX} from './actions';

//  Reducer to create new form
const formReducer = (state = [], action) => {
  if (action.type === ADD_FORM) {
        return [...state, action.payload]
  }
  return state;
};

//  Reducer to add new html forms
const formBoxReducer = (state = [], action) => {
  if (action.type === ADD_FORM_BOX) {
    return [...state, action.payload]
  }
  return state;
};

const reducer = combineReducers({
  forms: formReducer,
  formBoxes: formBoxReducer
});

export default reducer;
