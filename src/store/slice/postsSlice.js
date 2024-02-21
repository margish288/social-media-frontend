import { createSlice } from "@reduxjs/toolkit";
import {
  createPost,
  fetchPosts,
  fetchUserPosts,
  patchLike,
} from "../action/postsAction";

const initialState = {
  status: null,
  isLoading: false,
  posts: [],
  updatedPost: null,
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

    builder.addCase(fetchUserPosts.pending, (state, action) => {
      state.status = "loading";
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchUserPosts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.status = "success";
      state.posts = action.payload;
      state.error = null;
    });
    builder.addCase(fetchUserPosts.rejected, (state, action) => {
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
      state.posts = [...action.payload];
      state.error = null;
    });
    builder.addCase(createPost.rejected, (state, action) => {
      state.error = action.error.message;
      state.status = "failed";
      state.isLoading = false;
    });

    // patch like
    builder.addCase(patchLike.pending, (state, action) => {
      state.status = "loading";
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(patchLike.fulfilled, (state, action) => {
      state.isLoading = false;
      state.status = "success";
      state.updatedPost = action.payload;
      state.error = null;
    });
    builder.addCase(patchLike.rejected, (state, action) => {
      state.error = action.error.message;
      state.status = "failed";
      state.isLoading = false;
    });
  },
});

export default postsSlice.reducer;
