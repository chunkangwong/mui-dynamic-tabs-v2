import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useDispatch, useSelector } from "react-redux";
import { setActiveWidget, setWidgets } from "./widgetsSlice";
import { AppDispatch, RootState } from "../../store/store";

const widgetNames = ["Widget1", "Widget2"];

interface WidgetMenuProps {}

export default function WidgetMenu({}: WidgetMenuProps) {
  const widgets = useSelector((state: RootState) => state.widgets.widgets);
  const dispatch = useDispatch<AppDispatch>();

  const handleFormat = (
    event: React.MouseEvent<HTMLElement>,
    newWidgets: string[]
  ) => {
    dispatch(setWidgets(newWidgets));
    dispatch(
      setActiveWidget(newWidgets.length === 0 ? 0 : newWidgets.length - 1)
    );
  };

  return (
    <ToggleButtonGroup
      value={widgets}
      onChange={handleFormat}
      aria-label="text formatting"
    >
      {widgetNames.map((widgetName) => (
        <ToggleButton value={widgetName} key={`widget-menu-btn-${widgetName}`}>
          {widgetName}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}
