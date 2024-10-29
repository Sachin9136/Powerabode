import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getSingleBlogApi } from "../../Api_url";

// Thunk for fetching a single blog
export const getSingleBlog = createAsyncThunk("blog/getSingleBlog", async (id) => {
  const response = await axios.get(`${getSingleBlogApi}/${id}`);
  return response.data;
});

const blogSlice = createSlice({
  name: "singleBlogSlice",
  initialState: {
    singleBlogs: {},
    status: "idle",
    error: null,
  },
  reducers: {
    // Reset blog data to an empty state when navigating
    resetBlog: (state) => {
      state.singleBlogs = {};
      state.status = "idle";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSingleBlog.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getSingleBlog.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.singleBlogs = action.payload.data;
      })
      .addCase(getSingleBlog.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { resetBlog } = blogSlice.actions;

export default blogSlice.reducer;
