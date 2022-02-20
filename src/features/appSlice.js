import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: "app",
  initialState: {
    roomId: null,
  },

  reducers: {
    // Todo: setting up actions
    enterRoom: (state, action) => {
      state.roomId = action.payload.roomId;
    },
  },
});

export const { enterRoom } = appSlice.actions;

export const selectCount = (state) => state.app.value;

export const selectRoomId = (state) => state.app.roomId;

export default appSlice.reducer;
