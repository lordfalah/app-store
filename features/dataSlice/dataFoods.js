import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import api from "../../dataApi/api";

export const searchDataFoods = createAsyncThunk(
  "search/searchData",
  async (value) => {
    const response = await api.get(`/products?q=${value}`);
    return response.data;
  }
);

export const allDataFoods = createAsyncThunk("data/allData", async () => {
  const response = await api.get("/products");
  return response.data;
});

const foodsAdapter = createEntityAdapter({
  selectId: (state) => state.id,
});

const searchListFoods = createSlice({
  name: "search",
  initialState: {
    valueSearch: foodsAdapter.getInitialState(),
  },

  extraReducers: {
    [searchDataFoods.fulfilled]: (state, action) => {
      foodsAdapter.setAll(state.valueSearch, action.payload);
    },
    [allDataFoods.fulfilled]: (state, action) => {
      foodsAdapter.setAll(state.valueSearch, action.payload);
    },
  },
});

export const foodsSelector = foodsAdapter.getSelectors(
  (state) => state.searchData.valueSearch
);

export default searchListFoods;
