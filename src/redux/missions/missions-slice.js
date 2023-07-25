import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMissions = createAsyncThunk(
  'missions/fetchMissions',
  async () => {
    try {
      const missions = await axios.get(
        'https://api.spacexdata.com/v3/missions',
      );

      const missionsFilteredData = missions.data.map(
        ({
          mission_id: missionId,
          mission_name: missionName,
          description,
        }) => ({
          missionId,
          missionName,
          description,
          reserved: false,
        }),
      );
      return missionsFilteredData;
    } catch (error) {
      throw new Error(error);
    }
  },
);

const missionsSlice = createSlice({
  name: 'missions',
  initialState: {
    missions: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    joinMission: (state, action) => {
      const mission = state.missions.find(
        (mission) => mission.missionId === action.payload,
      );
      if (mission) {
        mission.reserved = true;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.pending, (state) => ({
        ...state,
        isLoading: true,
        error: null,
      }))
      .addCase(fetchMissions.fulfilled, (state, action) => ({
        ...state,
        missions: action.payload,
        isLoading: false,
        error: null,
      }))
      .addCase(fetchMissions.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.error.message,
      }));
  },
});

export const { joinMission } = missionsSlice.actions;

export default missionsSlice.reducer;
