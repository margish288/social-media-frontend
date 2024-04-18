import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "config";
import { callApi } from "misc/callApi";

export const searchUser = createAsyncThunk(
  "search/user",
  async (searchString, { rejectWithValue }) => {
    try {
      const response = await callApi(
        `${API_URL}/search?username=${searchString}`,
        "GET"
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
