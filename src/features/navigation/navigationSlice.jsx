import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  page: "home",
};

export const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    setPage: (state, {payload}) => {
      state.page = payload;
    },
  },
});

export const {setPage} = navigationSlice.actions;
export default navigationSlice.reducer;
