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

export const patchFriend = createAsyncThunk(
  "friends/patchFriends",
  async ({ _id, friendId }, { rejectWithValue }) => {
    try {
      const response = await callApi(
        `${API_URL}/users/${_id}/${friendId}`,
        "PATCH"
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
