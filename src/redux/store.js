import {createStore} from 'redux';
import {addForm} from './actions';
import reducer from './reducer';

const store = createStore(reducer);


store.dispatch(
  addForm({name: 'Text', formType: 'text'}),
);

store.dispatch(
  addForm({name: 'Data', formType: 'data'}),
);




export default store;
