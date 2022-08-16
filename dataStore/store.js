import { configureStore } from "@reduxjs/toolkit";
import buttonSlicer from "../features/button/buttonSlice";
import searchListFoods from "../features/dataSlice/dataFoods";
import dataKeranjangFoods from "../features/dataSlice/dataKeranjang";

const store = configureStore({
  reducer: {
    buttonCostume: buttonSlicer.reducer,
    searchData: searchListFoods.reducer,
    keranjangData: dataKeranjangFoods.reducer,
  },
});

export default store;
