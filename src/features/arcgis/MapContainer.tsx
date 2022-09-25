import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export default function MapContainer() {
  const viewRef = useRef<HTMLDivElement>(null);
  const { view } = useSelector((state: RootState) => state.arcgis);

  useEffect(() => {
    view.container = viewRef.current as HTMLDivElement;
  }, [view]);

  return (
    <div
      style={{
        height: "100%",
      }}
      ref={viewRef}
    ></div>
  );
}
