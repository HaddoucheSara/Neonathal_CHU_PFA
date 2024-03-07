// third-party
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { setupListeners } from '@reduxjs/toolkit/query/react';


// project import
import rootReducers from './reducers';
import { signInApi } from '../services/signingApi';
import { registerApi, usersUpdate } from '../services/registerApi';
import { usersApi } from '../services/registerApi';

// ==============================|| REDUX TOOLKIT - MAIN STORE ||============================== //
const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = configureStore({

    // reducer: {
    //     entity: entityReducer,
    //     persistedReducer,
    //     // Ajoutez d'autres reducers si nécessaire
    //   },

    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        }).concat([
            signInApi.middleware,
            registerApi.middleware,
            usersApi.middleware,
            // usersUpdate.middleware,
        ]),
    devTools: true,

});
setupListeners(store.dispatch);
const { dispatch } = store;
let persistor = persistStore(store);

export { store, dispatch, persistor };
