import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getEventApi } from "../../Api_url";
import { toast } from "react-toastify";

// create  
const token = localStorage.getItem("token");
const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`,
};


// get Banners
export const getallEvent = createAsyncThunk("getallEvent/events", async () => {
  try {
    const response = await axios.get(getEventApi, { headers });
    return response.data; 
  } catch (error) {
    throw new Error(error.message);
  }
});

const EventsSlice = createSlice({
  name: "event",
  initialState: {
    events: [],
    status: "idle",
    loadingStatus: "idle",
    error: null,
    message: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    
      // //getstories
      .addCase(getallEvent.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getallEvent.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.events = action.payload;
      })
      .addCase(getallEvent.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
  },
});


export default EventsSlice.reducer;
