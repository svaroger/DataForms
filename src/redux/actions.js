//action types
export const ADD_FORM = 'ADD_FORM';
export const ADD_FORM_BOX = 'ADD_FORM_BOX';

//action creators
export const addForm = newForm => ({
  type: ADD_FORM,
  payload: newForm,
});

export const addFormBox = newFormBox => ({
  type: ADD_FORM_BOX,
  payload: newFormBox,
});
