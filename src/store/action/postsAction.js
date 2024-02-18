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
      console.log({ data });
      const response = await callApi(`${API_URL}/posts`, "POST", data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
