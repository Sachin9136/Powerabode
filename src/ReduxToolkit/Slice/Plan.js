import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  getallplanApi,
  createplanApi,
  updateplanApi,
  deleteplanApi,
  getBannerApi,
} from "../../Api_url";
import { toast } from "react-toastify";

// create plan
const token = localStorage.getItem("token");
const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`,
};
export const createplan = createAsyncThunk(
  "createplan/plan",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(createplanApi, data, { headers });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
// update
export const updateplan = createAsyncThunk(
  "updateplan/plan",
  async ({ selectedId, data }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${updateplanApi}/${selectedId}`, data);
      return response.data.message;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
// get 
export const getallplan = createAsyncThunk("getallplan/plan", async () => {
  try {
    const response = await axios.get(getallplanApi, { headers });
    return response.data; 
  } catch (error) {
    throw new Error(error.message);
  }
});

// delete plan
export const deleteplan = createAsyncThunk(
  "deleteplan/plan",
  async (planId, { rejectWithValue }) => {
    try {
      await axios.delete(`${deleteplanApi}/${planId}`);
      return planId;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);


// get Banners
export const getAllBanners = createAsyncThunk("getAllBanners/banners", async () => {
  try {
    const response = await axios.get(getBannerApi, { headers });
    return response.data; 
  } catch (error) {
    throw new Error(error.message);
  }
});

const planSlice = createSlice({
  name: "plan",
  initialState: {
    plans: [],
    status: "idle",
    loadingStatus: "idle",
    error: null,
    message: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      //create plan
      .addCase(createplan.pending, (state) => {
        state.loadingStatus = "loading";
      })
      .addCase(createplan.fulfilled, (state, action) => {
        state.loadingStatus = "succeeded";
        state.plans.push(action.payload.plan);
        toast.success(action.payload.message);
      })
      .addCase(createplan.rejected, (state, action) => {
        state.loadingStatus = "failed";
        state.error = action.payload;
        toast.error(action.payload);
      })
      //update plan
      .addCase(updateplan.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateplan.fulfilled, (state, action) => {
        state.status = "succeeded";
        const updatedplan = action.payload.plan;
        const existingplan = state.plans.find(
          (plan) => plan._id === updatedplan._id
        );
        if (existingplan) {
          existingplan.status = updatedplan.status;
        }
        toast.success(action.payload.message);
      })
      .addCase(updateplan.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
        if (state.status === "failed") {
          toast.error(action.payload);
        }
      })
      // //getplan
      .addCase(getallplan.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getallplan.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.plans = action.payload;
      })
      .addCase(getallplan.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      // //delete plan
    //   .addCase(deleteplan.pending, (state) => {
    //     state.status = "loading";
    //   })
      .addCase(deleteplan.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.plans = state.plans.filter((plan) => plan._id !== action.payload);
        if (state.status === "succeeded") {
          toast.success("Plan Delete Succefully!!");
        }
      })
      .addCase(deleteplan.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
        if (state.status === "failed") {
          toast.error(action.payload);
        }
      });
  },
});

export default planSlice.reducer;
