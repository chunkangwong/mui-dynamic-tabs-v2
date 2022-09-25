import { configureStore } from "@reduxjs/toolkit";
import countReducer from "../features/count/countSlice";
import resultsReducer from "../features/results/resultsSlice";
import widgetsReducer from "../features/widgets/widgetsSlice";
import arcgisReducer from "../features/arcgis/arcgisSlice";

const store = configureStore({
  reducer: {
    count: countReducer,
    results: resultsReducer,
    widgets: widgetsReducer,
    arcgis: arcgisReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
