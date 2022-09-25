import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import EsriFeatureTable from "@arcgis/core/widgets/FeatureTable";
import { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

interface FeatureTable {
  featureLayer: FeatureLayer;
}

export default function FeatureTable({ featureLayer }: FeatureTable) {
  const view = useSelector((state: RootState) => state.arcgis.view);
  const tableRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    view.when(() => {
      new EsriFeatureTable({
        view,
        layer: featureLayer,
        container: tableRef.current as HTMLDivElement,
      });
    });
  }, [view, featureLayer]);

  return (
    <div
      ref={tableRef}
      style={{
        height: "100%",
      }}
    ></div>
  );
}
