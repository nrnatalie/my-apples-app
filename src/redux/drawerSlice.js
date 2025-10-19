import { createSlice } from "@reduxjs/toolkit";

const savedApples = JSON.parse(localStorage.getItem("savedApples")) || [];

const drawerSlice = createSlice({
  name: "drawerSlice",
  initialState: savedApples,
  reducers: {
    addApple: (state, action) => {
      state.push({
        id: Date.now(),
        name: action.payload,
        important: false,
      });
      localStorage.setItem("savedApples", JSON.stringify(state));
    },
    toggleImportantApple: (state, action) => {
      const apple = state.find((a) => a.id === action.payload);
      if (apple) apple.important = !apple.important;
      localStorage.setItem("savedApples", JSON.stringify(state));
    },
    deleteApple: (state, action) => {
      const newState = state.filter((a) => a.id !== action.payload);
      localStorage.setItem("savedApples", JSON.stringify(newState));
      return newState;
    },
  },
});

export const { addApple, toggleImportantApple, deleteApple } =
  drawerSlice.actions;
export default drawerSlice.reducer;
