import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addResult,
  selectResultByLabel,
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
      dispatch(
        addResult({
          label: WIDGET_LABEL,
          content: "WidgetResult1",
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
