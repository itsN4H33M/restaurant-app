import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRestos = createAsyncThunk("restoList/fetchRestos", () => {
  // api call
  return axios
    .get("/restaurants.json")
    .then((response) => response.data.restaurants);
});

const restoSlice = createSlice({
  name: "restoList",
  initialState: {
    loading: false,
    allRestos: [],
    allRestoContainer: [],
    error: "",
  },
  reducers: {
    searchResto: (state, action) => {
      state.allRestos = state.allRestoContainer.filter((item) =>
        item.neighborhood.toLowerCase().includes(action.payload)
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRestos.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchRestos.fulfilled, (state, action) => {
      state.loading = false;
      state.allRestos = action.payload;
      state.allRestoContainer = action.payload;
      state.error = "";
    });
    builder.addCase(fetchRestos.rejected, (state, action) => {
      state.loading = false;
      state.allRestos = [];
      state.error = action.error.message;
    });
  },
});

export const { searchResto } = restoSlice.actions;
export default restoSlice.reducer;
