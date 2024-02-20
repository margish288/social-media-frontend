import { createSlice } from "@reduxjs/toolkit";

const resetSlice = createSlice({
  name: "reset",
  reducers: {
    resetAll: () => ({}), // Clearing the state by returning an empty object
  },
});

export const { resetAll } = resetSlice.actions;
export default resetSlice.reducer;
