import { createSlice } from "@reduxjs/toolkit";
import { getUser } from "../action/userAction";

const initialState = {
  status: null,
  isLoading: false,
  user: null,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUser.pending, (state, action) => {
      state.status = "loading";
      state.isLoading = true;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.status = "success";
      state.user = action.payload;
      state.error = null;
    });
    builder.addCase(getUser.rejected, (state, action) => {
      state.isLoading = false;
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

export default userSlice.reducer;
