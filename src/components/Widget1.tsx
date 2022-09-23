import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Portal from "@mui/material/Portal";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addResult,
  selectResultByLabel,
  updateResult,
} from "../features/results/resultsSlice";
import { AppDispatch, RootState } from "../store/store";

interface Widget1Props {}

function WidgetResult1({ value }: { value: string }) {
  const firstRef = useRef(true);

  useEffect(() => {
    if (firstRef.current) {
      firstRef.current = false;
      console.log("WidgetResult1 first mounted");
      return;
    }
    console.log("WidgetResult1 rerendered");
    return () => {
      console.log("WidgetResult1 unmounted");
    };
  });

  return <h1>{value}</h1>;
}

export default function Widget1({}: Widget1Props) {
  const [value, setValue] = useState("123");
  const resultRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch<AppDispatch>();
  const activeResult = useSelector((state: RootState) =>
    selectResultByLabel(state, "Widget1")
  );

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  function handleSearch() {
    if (!activeResult) {
      dispatch(
        addResult({
          label: "Widget1",
          content: <WidgetResult1 value={value} />,
        })
      );
    } else {
      dispatch(
        updateResult({
          label: "Widget1",
          content: <WidgetResult1 value={value} />,
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
      <Portal container={resultRef.current}>
        <Box role="result-container">
          <Typography variant="h5">{value}</Typography>
        </Box>
      </Portal>
    </Stack>
  );
}
