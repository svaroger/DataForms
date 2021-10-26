import {createStore} from 'redux';
import {addForm} from './actions';
import reducer from './reducer';

const store = createStore(reducer);


// store.dispatch(
//   addForm({name: 'Address'}),
// );


export default store;
