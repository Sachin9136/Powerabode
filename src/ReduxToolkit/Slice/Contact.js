import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { createContactApi,createNewsletterApi } from "../../Api_url";
import { toast } from "react-toastify";

// create Contact
// const token = localStorage.getItem("token");
// const headers = {
//   "Content-Type": "application/json",
//   Authorization: `Bearer ${token}`,
// };
export const createContact = createAsyncThunk(
  "createContact/Contact",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(createContactApi, formData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const createNewsletter = createAsyncThunk(
  "createNewsletter/Contact",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(createNewsletterApi, formData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

const ContactSlice = createSlice({
  name: "Contact",
  initialState: {
    Contacts: [],
    status: "idle",
    loadingStatus: "idle",
    loadingNewsletter: "idle",
    error: null,
    message: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      //create Contact
      .addCase(createContact.pending, (state) => {
        state.loadingStatus = "loading";
      })
      .addCase(createContact.fulfilled, (state, action) => {
        state.loadingStatus = "succeeded";
        state.Contacts.push(action.payload.Contact);
        toast.success("Session Booked Succefully");
      })
      .addCase(createContact.rejected, (state, action) => {
        state.loadingStatus = "failed";
        state.error = action.payload;
        toast.error(action.payload);
      })
      //create createNewsletter
      .addCase(createNewsletter.pending, (state) => {
        state.loadingNewsletter = "loading";
      })
      .addCase(createNewsletter.fulfilled, (state, action) => {
        state.loadingNewsletter = "succeeded";
        state.Contacts.push(action.payload.Contact);
        toast.success("Newsletter Subscribed Succefully");
      })
      .addCase(createNewsletter.rejected, (state, action) => {
        state.loadingNewsletter = "failed";
        state.error = action.payload;
        toast.error(action.payload);
      });
  },
});

export default ContactSlice.reducer;
