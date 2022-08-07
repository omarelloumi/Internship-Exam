import { configureStore } from '@reduxjs/toolkit';
import stagiaireReducer from '../features/stagiaire/stagiaireSlice';
import stageReducer from '../features/stage/stageSlice'

export const store = configureStore({
  reducer: {
    stagiaire : stagiaireReducer,
    stage : stageReducer
  },
});
