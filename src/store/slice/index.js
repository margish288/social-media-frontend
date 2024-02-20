import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
};

export const localStoreSlice = createSlice({
  name: "localStore",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { setMode } = localStoreSlice.actions;
export default localStoreSlice.reducer;
