import { ReactNode, RefObject } from "react";

interface TabPanelProps {
  children?: ReactNode;
  index: number;
  value: number;
  ref?: RefObject<HTMLDivElement>;
}

export default function TabPanel({
  children,
  value,
  index,
  ref,
  ...other
}: TabPanelProps) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      style={{
        height: "100%",
      }}
      {...other}
      ref={ref}
    >
      {children}
    </div>
  );
}
