import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../action/loginAction";

const initialState = {
  status: null,
  isLoading: false,
  user: null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state, action) => {
      state.status = "loading";
      state.isLoading = true;
      state.error = null;
      state.user = null;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.status = "success";
      state.user = action.payload;
      state.error = null;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLoading = false;
      state.status = "failed";
      state.user = null;
      state.error = action.error.message;
    });
  },
});

export default authSlice.reducer;
