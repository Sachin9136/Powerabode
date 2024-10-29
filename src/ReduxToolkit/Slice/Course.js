import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getCourseApi } from "../../Api_url";

// get the token from localStorage for authentication
const token = localStorage.getItem("token");
const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`,
};

// Thunk to get all courses
export const getallCourse = createAsyncThunk("getallCourse/courses", async () => {
  try {
    const response = await axios.get(getCourseApi, { headers });
    return response.data; 
  } catch (error) {
    throw new Error(error.message);
  }
});

const coursesSlice = createSlice({
  name: "course",
  initialState: {
    courses: {},  // Changed to an object to match the response structure
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getallCourse.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getallCourse.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.courses = action.payload;
      })
      .addCase(getallCourse.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default coursesSlice.reducer;
