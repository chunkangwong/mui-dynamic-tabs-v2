import { Stack } from "@mui/material";
import "./App.css";
import MapContainer from "./features/arcgis/MapContainer";
import Results from "./features/results/Results";
import Widgets from "./features/widgets/Widgets";

function App() {
  return (
    <div className="App">
      <Stack
        direction="row"
        sx={{
          height: "100%",
        }}
      >
        <div
          style={{
            height: "50%",
            width: "70%",
          }}
        >
          <MapContainer />
          <Results />
        </div>
        <Stack>
          <Widgets />
        </Stack>
      </Stack>
    </div>
  );
}

export default App;
