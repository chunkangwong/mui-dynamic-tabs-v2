import { CircularProgress } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import TabPanel from "../../components/TabPanel";
import { AppDispatch, RootState } from "../../store/store";
import { setActiveWidget } from "./widgetsSlice";

interface WidgetTabsProps {}

export default function WidgetTabs({}: WidgetTabsProps) {
  const { widgets, activeWidget } = useSelector(
    (state: RootState) => state.widgets
  );
  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    dispatch(setActiveWidget(newValue));
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={activeWidget} onChange={handleChange}>
          {widgets.map((widget, index) => (
            <Tab label={widget} key={`tab-${index}`} />
          ))}
        </Tabs>
      </Box>
      {widgets.map((widget, index) => {
        const WidgetComponent = lazy(
          () => import(`../../components/${widget}.tsx`)
        );
        return (
          <TabPanel
            value={activeWidget}
            index={index}
            key={`tabpanel-${index}`}
          >
            <Suspense fallback={<CircularProgress />}>
              <WidgetComponent />
            </Suspense>
          </TabPanel>
        );
      })}
    </Box>
  );
}
