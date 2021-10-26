//action types
export const ADD_FORM = 'ADD_FORM';


//action creators
export const addForm = newForm => ({
  type: ADD_FORM,
  payload: newForm,
});
