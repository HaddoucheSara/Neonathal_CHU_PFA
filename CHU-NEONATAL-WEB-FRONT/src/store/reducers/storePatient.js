import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import patientReducer from './reducersPatient';
const store = createStore(patientReducer, applyMiddleware(thunkMiddleware));

export default store;
