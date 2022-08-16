import { createSlice } from "@reduxjs/toolkit";

const initialStateBtn = {
  textBtn: {
    btn1: "Orders",
    btn2: "Preivew All",
  },
};

const buttonSlicer = createSlice({
  name: "button",
  initialState: {
    btnState: initialStateBtn,
  },
  reducers: {
    costumeBtn: (state, action) => {
      state.btnState = action.payload;
    },
  },
});

export const { costumeBtn } = buttonSlicer.actions;
export default buttonSlicer;
