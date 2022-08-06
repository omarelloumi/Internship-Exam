import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import stagiaireSlice from '../features/stagiaire/stagiaireSlice';

export const store = configureStore({
  reducer: {
    stagiaire: stagiaireSlice,
    counter: counterReducer
  },
});
