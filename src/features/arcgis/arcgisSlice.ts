import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import { createSlice } from "@reduxjs/toolkit";

interface ArcgisState {
  map: Map;
  view: MapView;
}

const map = new Map({
  basemap: "topo-vector",
});

const view = new MapView({
  map: map,
  center: [-120, 45],
  zoom: 3,
});

const initialState: ArcgisState = {
  map: map,
  view: view,
};

const arcgisSlice = createSlice({
  name: "arcgis",
  initialState,
  reducers: {},
});

export const {} = arcgisSlice.actions;

export default arcgisSlice.reducer;
