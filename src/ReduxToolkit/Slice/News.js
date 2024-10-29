import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getNewsApi } from "../../Api_url";
import { toast } from "react-toastify";

// create  
const token = localStorage.getItem("token");
const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`,
};


// get Banners
export const getallNews = createAsyncThunk("getallNews/all_news", async () => {
  try {
    const response = await axios.get(getNewsApi, { headers });
    return response.data; 
  } catch (error) {
    throw new Error(error.message);
  }
});

const NewsSlice = createSlice({
  name: "news",
  initialState: {
    all_news: [],
    status: "idle",
    loadingStatus: "idle",
    error: null,
    message: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    
      // //getstories
      .addCase(getallNews.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getallNews.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.all_news = action.payload;
      })
      .addCase(getallNews.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
  },
});


export default NewsSlice.reducer;
