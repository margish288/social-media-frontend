import { createSlice } from "@reduxjs/toolkit";
import { getFriends, patchFriend } from "../action/friendsAction";

const initialState = {
  status: null,
  isLoading: false,
  friends: [],
  error: null,
};

const friendsSlice = createSlice({
  name: "friends",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFriends.pending, (state, action) => {
      state.status = "loading";
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getFriends.fulfilled, (state, action) => {
      state.status = "success";
      state.isLoading = false;
      state.friends = action.payload;
      state.error = null;
    });
    builder.addCase(getFriends.rejected, (state, action) => {
      state.status = "failed";
      state.isLoading = false;
      state.friends = null;
      state.error = action.error.message;
    });

    // patch friend
    builder.addCase(patchFriend.pending, (state, action) => {
      state.status = "loading";
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(patchFriend.fulfilled, (state, action) => {
      state.status = "success";
      state.isLoading = false;
      state.friends = action.payload;
      state.error = null;
    });
    builder.addCase(patchFriend.rejected, (state, action) => {
      state.status = "success";
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default friendsSlice.reducer;
