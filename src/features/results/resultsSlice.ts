import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ReactNode } from "react";
import { RootState } from "../../store/store";

type Label = string;

interface ResultState {
  label: Label;
  content: ReactNode;
}

const initialState = {
  activeResult: 0,
  results: [] as ResultState[],
};

export const createResultsSlice = (tabsState: typeof initialState) =>
  createSlice({
    name: "results",
    initialState: tabsState,
    reducers: {
      setActiveResult(state, action: PayloadAction<number>) {
        state.activeResult = action.payload;
      },
      setResults(state, action: PayloadAction<ResultState[]>) {
        state.results = action.payload;
      },
      addResult(state, action: PayloadAction<ResultState>) {
        state.results.push(action.payload);
        state.activeResult = state.results.length - 1;
      },
      removeResult(state, action: PayloadAction<Label>) {
        state.results = state.results.filter(
          (result) => result.label !== action.payload
        );
        state.activeResult = state.results.length - 1;
      },
      updateResult(state, action: PayloadAction<ResultState>) {
        state.results.forEach((result) => {
          if (result.label === action.payload.label) {
            result.content = action.payload.content;
          }
        });
      },
    },
  });

const resultsSlice = createResultsSlice(initialState);

export const {
  setActiveResult,
  setResults,
  addResult,
  removeResult,
  updateResult,
} = resultsSlice.actions;

export default resultsSlice.reducer;

const selectResults = (state: RootState) => state.results.results;

export const selectResultByLabel = createSelector(
  [selectResults, (state: RootState, label: Label) => label],
  (results, label) => results.find((result) => result.label === label)
);
