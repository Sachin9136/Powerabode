import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getTeamApi } from "../../Api_url";
import { toast } from "react-toastify";

// create 
const token = localStorage.getItem("token");
const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`,
};


// get Banners
export const getallTeam = createAsyncThunk("getallTeam/teams", async () => {
  try {
    const response = await axios.get(getTeamApi, { headers });
    return response.data; 
  } catch (error) {
    throw new Error(error.message);
  }
});

const TeamSlice = createSlice({
  name: "team",
  initialState: {
    teams: [],
    status: "idle",
    loadingStatus: "idle",
    error: null,
    message: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    
      // //getstories
      .addCase(getallTeam.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getallTeam.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.teams = action.payload;
      })
      .addCase(getallTeam.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
  },
});


export default TeamSlice.reducer;
