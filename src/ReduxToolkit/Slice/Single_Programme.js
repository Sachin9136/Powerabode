import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getSingleProgrammeApi } from "../../Api_url";

// Async thunk for fetching a single programme
export const getSingleProgramme = createAsyncThunk(
  "programme/getSingleProgramme",
  async (id) => {
    const response = await axios.get(`${getSingleProgrammeApi}/${id}`);
    return response.data;
  }
);

const ProgrammeSlice = createSlice({
  name: "singleProgrammeSlice",
  initialState: {
    singleProgramme: {}, // Initialize with empty object
    status: "idle",
    error: null,
  },
  reducers: {
    // Reset programme data when navigating to a new programme
    resetProgramme: (state) => {
      state.singleProgramme = {};
      state.status = "idle";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSingleProgramme.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getSingleProgramme.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.singleProgramme = action.payload.data; // Ensure the correct path to the data
      })
      .addCase(getSingleProgramme.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { resetProgramme } = ProgrammeSlice.actions;

export default ProgrammeSlice.reducer;
