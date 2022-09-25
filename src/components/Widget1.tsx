import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addResult,
  selectResultByLabel,
  updateResult,
} from "../features/results/resultsSlice";
import { AppDispatch, RootState } from "../store/store";

interface Widget1Props {}

const WIDGET_LABEL = "Widget1";

export default function Widget1({}: Widget1Props) {
  const [value, setValue] = useState("123");
  const activeResult = useSelector((state: RootState) =>
    selectResultByLabel(state, WIDGET_LABEL)
  );
  const dispatch = useDispatch<AppDispatch>();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  function handleSearch() {
    if (!activeResult) {
      const featureLayer = new FeatureLayer({
        url: "https://services2.arcgis.com/GrCObcYo81O3Ymu8/arcgis/rest/services/HDB_Car_Park_Location/FeatureServer/0",
        outFields: ["*"],
      });
      dispatch(
        addResult({
          label: WIDGET_LABEL,
          content: "FeatureTable",
          contentState: { featureLayer: featureLayer },
        })
      );
    } else {
      const featureLayer = new FeatureLayer({
        url: "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/ArcGIS/rest/services/Hazards_Uptown_Charlotte/FeatureServer/0",
        outFields: ["*"],
      });
      dispatch(
        updateResult({
          label: WIDGET_LABEL,
          contentState: { featureLayer: featureLayer },
        })
      );
    }
  }

  return (
    <Stack gap={2}>
      <Typography variant="h5">Widget1</Typography>
      <Stack direction="row" gap={1} alignItems="center">
        <TextField label="keyword" onChange={handleChange} value={value} />
        <Button variant="contained" onClick={handleSearch}>
          Search
        </Button>
      </Stack>
    </Stack>
  );
}
