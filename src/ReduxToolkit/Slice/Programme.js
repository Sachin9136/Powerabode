import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getProgrammeApi } from "../../Api_url";
import { toast } from "react-toastify";

// create 
const token = localStorage.getItem("token");
const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`,
};


// get Banners
export const getallProgramme = createAsyncThunk("getallProgramme/programs", async () => {
  try {
    const response = await axios.get(getProgrammeApi, { headers });
    return response.data; 
  } catch (error) {
    throw new Error(error.message);
  }
});

const ProgrammeSlice = createSlice({
  name: "Programme",
  initialState: {
    programs: [],
    status: "idle",
    loadingStatus: "idle",
    error: null,
    message: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    
      // //getstories
      .addCase(getallProgramme.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getallProgramme.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.programs = action.payload;
      })
      .addCase(getallProgramme.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
  },
});


export default ProgrammeSlice.reducer;
