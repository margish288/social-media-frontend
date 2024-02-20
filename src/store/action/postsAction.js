import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "config";
import { callApi } from "misc/callApi";

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await callApi(`${API_URL}/posts`, "GET");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchUserPosts = createAsyncThunk(
  "posts/fetchUserPosts",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await callApi(`${API_URL}/posts/${userId}/posts`, "GET");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const clearPost = createAsyncThunk(
  "posts/clearPosts",
  async (data, { rejectWithValue }) => {
    try {
      const response = await callApi(`${API_URL}/posts`, "POST", (data = []));
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const createPost = createAsyncThunk(
  "posts/createPost",
  async (data, { rejectWithValue }) => {
    try {
      const response = await callApi(`${API_URL}/posts`, "POST", data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const patchLike = createAsyncThunk(
  "posts/like",
  async (data, { rejectWithValue }) => {
    try {
      const { postId } = data;
      const response = callApi(
        `${API_URL}/posts/${postId}/like`,
        "PATCH",
        data
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
