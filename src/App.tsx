import Stack from "@mui/material/Stack";
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
        <div
          style={{
            borderLeft: "1px solid #ccc",
            width: "30%",
          }}
        >
          <Widgets />
        </div>
      </Stack>
    </div>
  );
}

export default App;
