import TabPanel from "../../components/TabPanel";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import MuiTabs from "@mui/material/Tabs";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { setActiveResult } from "./resultsSlice";

interface ResultsProps {}

export default function Results({}: ResultsProps) {
  const { results, activeResult } = useSelector(
    (state: RootState) => state.results
  );
  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    dispatch(setActiveResult(newValue));
  };

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <MuiTabs value={activeResult} onChange={handleChange}>
          {results.map((result, index) => (
            <Tab label={result.label} key={`tab-${index}`} />
          ))}
        </MuiTabs>
      </Box>
      {results.map((result, index) => {
        return (
          <TabPanel
            index={index}
            value={activeResult}
            key={`tabpanel-${Math.random()}`}
          >
            {result.content}
          </TabPanel>
        );
      })}
    </Box>
  );
}
