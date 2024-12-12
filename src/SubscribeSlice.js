import { createSlice } from '@reduxjs/toolkit';

const initialState = false;

const subscribeSlice = createSlice({
  name: 'subscribe',
  initialState,
  reducers: {
    subscribe: () => true,
    unsubscribe: () => false,
  },
});

export const { subscribe, unsubscribe } = subscribeSlice.actions;
export default subscribeSlice.reducer; 
