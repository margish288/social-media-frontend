import { createSlice } from "@reduxjs/toolkit";
import { createPost, fetchPosts } from "../action/postsAction";

const initialState = {
  status: null,
  isLoading: false,
  posts: [],
  error: null,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // fetch post reducers
    builder.addCase(fetchPosts.pending, (state, action) => {
      state.status = "loading";
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.status = "success";
      state.posts = action.payload;
      state.error = null;
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.status = "failed";
      state.isLoading = false;
      state.posts = [];
      state.error = action.error.message;
    });

    // create post reducers
    builder.addCase(createPost.pending, (state, action) => {
      state.status = "loading";
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(createPost.fulfilled, (state, action) => {
      state.isLoading = false;
      state.status = "success";
      state.posts = [...action.payload, ...state.posts];
      state.error = null;
    });
    builder.addCase(createPost.rejected, (state, action) => {
      state.error = action.error.message;
      state.status = "failed";
      state.isLoading = false;
    });
  },
});

export default postsSlice.reducer;
