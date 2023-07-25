// rockets-slice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchRockets = createAsyncThunk(
  'rockets/fetchRockets',
  async () => {
    try {
      const response = await axios.get('https://api.spacexdata.com/v3/rockets');
      return response.data.map(
        ({
          id,
          rocket_name: name,
          description,
          flickr_images: flickrImages,
        }) => ({
          id,
          name,
          description,
          flickrImages,
          reserved: false,
        }),
      );
    } catch (error) {
      return error;
    }
  },
);

export const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: {
    rockets: [],
    filteredRockets: [],
    loading: false,
    error: null,
  },
  reducers: {
    reserveRocket: (state, action) => {
      const { payload: rocketId } = action;
      const rocket = state.rockets.find((rocket) => rocket.id === rocketId);
      if (rocket) {
        rocket.reserved = true;
      }
    },
    cancelRocket: (state, action) => {
      const { payload: rocketId } = action;
      const updatedRockets = state.rockets.map((rocket) => {
        if (rocket.id === rocketId) {
          return {
            ...rocket,
            reserved: false,
          };
        }
        return rocket;
      });
      return {
        ...state,
        rockets: updatedRockets,
        filteredRockets: updatedRockets.filter((rocket) => rocket.reserved),
      };
    },
    filterReservedRockets: (state) => ({
      ...state,
      filteredRockets: state.rockets.filter((rocket) => rocket.reserved),
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.pending, (state) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(fetchRockets.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        rockets: action.payload,
      }))
      .addCase(fetchRockets.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error.message,
      }));
  },
});

export const { reserveRocket, cancelRocket, filterReservedRockets } = rocketsSlice.actions;

export default rocketsSlice.reducer;
