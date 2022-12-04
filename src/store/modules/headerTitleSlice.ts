import { createSlice } from '@reduxjs/toolkit';

export type HeaderTitleState = string;

const initialState: HeaderTitleState = '';

export const headerTitleSlice = createSlice({
  name: 'headerTitle',
  initialState,
  reducers: {
    setTitle: (state, action: { payload: string }) => action.payload,
  },
});

export const { setTitle } = headerTitleSlice.actions;
