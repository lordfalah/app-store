import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import api from "../../dataApi/api";

export const getDataKeranjang = createAsyncThunk(
  "keranjang/getKeranjang",
  async () => {
    const response = await api.get("/keranjangs");
    return response.data;
  }
);

export const addKeranjang = createAsyncThunk(
  "keranjang/addKeranjang",
  async ({ jumlahPesan, keterangan, products }) => {
    const response = await api.post(`/keranjangs`, {
      jumlahPesan,
      keterangan,
      products,
    });

    return response.data;
  }
);

export const deleteKeranjangFood = createAsyncThunk(
  "keranjang/deleteKeranjangFood",
  async (id) => {
    await api.delete(`/keranjangs/${id}`);
    return id;
  }
);

export const deleteAllKeranjang = createAsyncThunk(
  "delete/allKeranjang",
  async (dataIDS) => {
    await dataIDS.map((ids) => api.delete(`/keranjangs/${ids}`));
    return dataIDS;
  }
);

const keranjangAdapter = createEntityAdapter({
  selectId: (state) => state.id,
});

const dataKeranjangFoods = createSlice({
  name: "data keranjang",
  initialState: {
    valueKeranjang: keranjangAdapter.getInitialState(),
  },

  extraReducers: {
    [getDataKeranjang.fulfilled]: (state, action) => {
      keranjangAdapter.setAll(state.valueKeranjang, action.payload);
    },
    [addKeranjang.fulfilled]: (state, action) => {
      keranjangAdapter.addOne(state.valueKeranjang, action.payload);
    },
    [deleteKeranjangFood.fulfilled]: (state, action) => {
      keranjangAdapter.removeOne(state.valueKeranjang, action.payload);
    },
    [deleteAllKeranjang.fulfilled]: (state, action) => {
      keranjangAdapter.removeAll(state.valueKeranjang, action.payload);
    },
  },
});

export const keranjangSelector = keranjangAdapter.getSelectors(
  (state) => state.keranjangData.valueKeranjang
);
export default dataKeranjangFoods;
