import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './rockets/rockets-slice';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
  },
});

export default store;
