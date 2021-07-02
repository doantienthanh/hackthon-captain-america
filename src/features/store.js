import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import logger from 'redux-logger';
import persist from 'features/persist';
import { allReducers } from 'features/reducers';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      ignoredActionPaths: [],
    },
  }),
];

if (__DEV__) {
  middleware.push(logger);
}

const persistWraperReducer = persistReducer(persist, allReducers);

export const store = configureStore({
  reducer: persistWraperReducer,
  middleware,
});

export const persistor = persistStore(store);
