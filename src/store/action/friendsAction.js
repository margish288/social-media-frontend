import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "config";
import { callApi } from "misc/callApi";

export const getFriends = createAsyncThunk(
  "friends/getFriends",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await callApi(
        `${API_URL}/users/${userId}/friends`,
        "GET"
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
