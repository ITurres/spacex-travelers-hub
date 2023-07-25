// rocket-slice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchRockets = createAsyncThunk('rocket/fetchRockets', async () => {
  const response = await axios.get('https://api.spacexdata.com/v3/rockets');
  return response.data.map(({
    id, rocket_name: name, description, flickr_images: flickrImages,
  }) => ({
    id, name, description, flickrImages,
  }));
});

export const rocketSlice = createSlice({
  name: 'rocket',
  initialState: { rockets: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.fulfilled, (state, action) => ({ ...state, rockets: action.payload }));
  },
});

export default rocketSlice.reducer;
