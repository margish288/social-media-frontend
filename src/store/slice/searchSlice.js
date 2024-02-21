import { createSlice } from "@reduxjs/toolkit";
import { searchUser } from "store/action/searchAction";

const initialState = {
  isLoading: false,
  status: null,
  search: null,
  searchResult: null,
  error: null,
};

const searchSlice = createSlice({
  name: "search",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(searchUser.pending, (state, action) => {
      state.isLoading = true;
      state.status = "loading";
      state.error = null;
      state.searchResult = null;
    });
    builder.addCase(searchUser.fulfilled, (state, action) => {
      state.searchResult = action.payload;
      state.isLoading = false;
      state.status = "success";
    });
    builder.addCase(searchUser.rejected, (state, action) => {
      state.isLoading = false;
      state.status = "failed";
      state.error = action.payload;
    });
  },
});

export default searchSlice.reducer;
