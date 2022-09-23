import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useState } from "react";

interface Widget2Props {}

export default function Widget2({}: Widget2Props) {
  const [value, setValue] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return (
    <Stack gap={2}>
      <Typography variant="h5">Widget2</Typography>
      <Stack direction="row" gap={1} alignItems="center">
        <TextField label="keyword" onChange={handleChange} value={value} />
        <Button variant="contained">Search</Button>
      </Stack>
    </Stack>
  );
}
