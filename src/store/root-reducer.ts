import { combineReducers } from '@reduxjs/toolkit';
import { userSlice } from './user-slice';
import { dataSlice } from './data-slice';
import { mainScreenSlice } from './main-screen-slice';

export const rootReducer = combineReducers({
  'data': dataSlice.reducer,
  'mainScreen': mainScreenSlice.reducer,
  'user': userSlice.reducer,
});
