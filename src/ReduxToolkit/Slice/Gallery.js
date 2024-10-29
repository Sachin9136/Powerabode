import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getGalleryApi } from "../../Api_url";
import { toast } from "react-toastify";

// create 
const token = localStorage.getItem("token");
const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`,
};


// get Banners
export const getAllGallery = createAsyncThunk("getAllGallery/galleries", async () => {
  try {
    const response = await axios.get(getGalleryApi, { headers });
    return response.data; 
  } catch (error) {
    throw new Error(error.message);
  }
});

const gallerySlice = createSlice({
  name: "gallery",
  initialState: {
    galleries: [],
    status: "idle",
    loadingStatus: "idle",
    error: null,
    message: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    
      // //getstories
      .addCase(getAllGallery.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllGallery.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.galleries = action.payload;
      })
      .addCase(getAllGallery.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
  },
});


export default gallerySlice.reducer;
