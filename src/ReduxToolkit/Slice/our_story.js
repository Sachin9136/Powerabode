import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getStoryApi } from "../../Api_url";
import { toast } from "react-toastify";

// create  
const token = localStorage.getItem("token");
const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`,
};


// get Banners
export const getallStory = createAsyncThunk("getallStory/stories", async () => {
  try {
    const response = await axios.get(getStoryApi, { headers });
    return response.data; 
  } catch (error) {
    throw new Error(error.message);
  }
});

const StoriesSlice = createSlice({
  name: "story",
  initialState: {
    stories: [],
    status: "idle",
    loadingStatus: "idle",
    error: null,
    message: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    
      // //getstories
      .addCase(getallStory.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getallStory.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.stories = action.payload;
      })
      .addCase(getallStory.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
  },
});


export default StoriesSlice.reducer;
