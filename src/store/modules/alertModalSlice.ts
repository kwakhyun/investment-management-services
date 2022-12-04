import { createSlice } from '@reduxjs/toolkit';

export type alertModalState = {
  isOpen: boolean;
  content: string;
};

const initialState: alertModalState = {
  isOpen: false,
  content: '',
};

export const alertModalSlice = createSlice({
  name: 'alertModal',
  initialState,
  reducers: {
    showModal: (state, action: { payload: string }) => {
      state.content = action.payload;
      state.isOpen = true;
    },
    unshowModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { showModal, unshowModal } = alertModalSlice.actions;
