import { Stack } from "@mui/material";
import WidgetMenu from "./WidgetMenu";
import WidgetTabs from "./WidgetTabs";

interface WidgetsProps {}

export default function Widgets({}: WidgetsProps) {
  return (
    <Stack
      sx={{
        width: "100%",
      }}
    >
      <WidgetMenu />
      <WidgetTabs />
    </Stack>
  );
}
