import { createSlice } from "@reduxjs/toolkit";

export const drugsViewSlice = createSlice({
  name: "drugsView",
  initialState: {
    currentView: "stock",
    expanded:"hidden",
    allChecked: false,
    stock: [],
    brands: [],
    generics: [],
    groups: [],
    formulations: [],
    units: [],
    manufacturers: [],
  },
  reducers: {
    setCurrentView: (state, action) => {
      const { view, data } = action.payload; 
      state.currentView = view;
      state[`${view}`] = data; 
      state.expanded = state.expanded==="hidden"?"block":"block";
    },
    checkSingle: (state, action) => {
      console.log(action.payload);
      state = { ...state, currentView: action.payload };
    },
    checkAll: (state, action) => {
      console.log(action.payload);
      state = { ...state, currentView: action.payload };
    },
    deletHandler: (state, action) => {
      console.log(action.payload);
      // state.booklist = state.booklist.filter((book)=>{
      //   return book!== action.payload
      // })
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCurrentView, checkSingle, checkAll } = drugsViewSlice.actions;

export default drugsViewSlice.reducer;
