import subscribeReducer from './SubscribeSlice'; 
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    subbed: subscribeReducer, 
  },
});

export default store;
