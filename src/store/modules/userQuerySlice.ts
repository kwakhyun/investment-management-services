import { createSlice } from '@reduxjs/toolkit';

export type UserQueryState = {
  page: number;
  limit: number;
  is_active: string | null;
  is_staff: string | null;
  search: string | null;
};

const initialState: UserQueryState = {
  page: 1,
  limit: 30,
  is_active: null,
  is_staff: null,
  search: null,
};

export const userQuerySlice = createSlice({
  name: 'userQuery',
  initialState,
  reducers: {
    setPage: (state, action: { payload: number }) => {
      state.page = action.payload;
    },
    setLimit: (state, action: { payload: number }) => {
      state.limit = action.payload;
    },
    setIsActive: (state, action: { payload: string }) => {
      if (action.payload === 'all') state.is_active = null;
      else state.is_active = action.payload;
    },
    setIsStaff: (state, action: { payload: string }) => {
      if (action.payload === 'all') state.is_staff = null;
      else state.is_staff = action.payload;
    },
    setSearch: (state, action: { payload: string }) => {
      if (action.payload === '') state.search = null;
      else state.search = action.payload;
    },
  },
});

export const { setPage, setLimit, setIsActive, setIsStaff, setSearch } = userQuerySlice.actions;
