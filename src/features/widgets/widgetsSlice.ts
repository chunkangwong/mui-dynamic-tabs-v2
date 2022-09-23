import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  activeWidget: 0,
  widgets: ["Widget1"] as string[],
};

export const createWidgetsSlice = (widgetsState: typeof initialState) =>
  createSlice({
    name: "widgets",
    initialState: widgetsState,
    reducers: {
      setActiveWidget(state, action: PayloadAction<number>) {
        state.activeWidget = action.payload;
      },
      setWidgets(state, action: PayloadAction<string[]>) {
        state.widgets = action.payload;
      },
    },
  });

const widgetsSlice = createWidgetsSlice(initialState);

export const { setActiveWidget, setWidgets } = widgetsSlice.actions;

export default widgetsSlice.reducer;
