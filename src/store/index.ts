import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { accountQuerySlice } from './modules/accountQuerySlice';
import { headerTitleSlice } from './modules/headerTitleSlice';
import { alertModalSlice } from './modules/alertModalSlice';
import { userQuerySlice } from './modules/userQuerySlice';

const rootReducer = combineReducers({
  [accountQuerySlice.name]: accountQuerySlice.reducer,
  [userQuerySlice.name]: userQuerySlice.reducer,
  [headerTitleSlice.name]: headerTitleSlice.reducer,
  [alertModalSlice.name]: alertModalSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
