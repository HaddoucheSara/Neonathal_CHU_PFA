
import { combineReducers } from 'redux';
import menu from './menu';
import { signInApi } from 'services/signingApi';
import { registerApi, usersApi, usersUpdate } from 'services/registerApi';
import authSlice from '../slices/authSlice';

const reducers = combineReducers({
  menu,
  auth: authSlice,
  [signInApi.reducerPath]: signInApi.reducer,
  [registerApi.reducerPath]: registerApi.reducer,
  [usersApi.reducerPath]: usersApi.reducer,
  // [usersUpdate.reducerPath]:usersUpdate.reducer,
 
});

export default reducers;
