import { combineReducers } from '@reduxjs/toolkit';
import auth from 'features/auth';
export const allReducers = combineReducers({
  auth: auth,
});
