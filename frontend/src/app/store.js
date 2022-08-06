import { configureStore } from '@reduxjs/toolkit';
import stagiaireReducer from '../features/stagiaire/stagiaireSlice';

export const store = configureStore({
  reducer: {
    stagiaire: stagiaireReducer,
  },
});
