import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './rockets/rockets-slice';
import missionsReducer from './missions/missions-slice';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: missionsReducer,
  },
});

export default store;
