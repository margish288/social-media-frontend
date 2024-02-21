import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "../action/loginAction";

const initialState = {
  status: null,
  isLoading: false,
  user: null,
  error: null,
};

const initialStateRegister = {
  status: null,
  isLoading: false,
  response: null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Login User
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

const registerSlice = createSlice({
  name: "register",
  initialState: initialStateRegister,
  reducers: {},
  extraReducers: (builder) => {
    // Register User
    builder.addCase(registerUser.pending, (state, action) => {
      state.status = "loading";
      state.isLoading = true;
      state.error = null;
      state.response = null;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.status = "success";
      state.response = action.payload;
      state.error = null;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.isLoading = false;
      state.status = "failed";
      state.response = null;
      state.error = action.error.message;
    });
  },
});

export const auth = authSlice.reducer;
export const register = registerSlice.reducer;
