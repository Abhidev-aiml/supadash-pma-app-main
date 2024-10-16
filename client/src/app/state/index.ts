import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface initialStateType {
    isSidebarcollapsed: boolean;
    isDarkMode: boolean;
}

const initialState : initialStateType = {
    isSidebarcollapsed: false,
    isDarkMode: false,
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setIsSidebarCollapsed: (state, action:PayloadAction<boolean>) => {
        state.isSidebarcollapsed = action.payload;
    },
    setIsDarkmode: (state, action:PayloadAction<boolean>) => {
        state.isDarkMode = action.payload;
    },
  },
});

export const {setIsSidebarCollapsed,setIsDarkmode} = globalSlice.actions;
export default globalSlice.reducer;
