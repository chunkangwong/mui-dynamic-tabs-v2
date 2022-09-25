import { useEffect, useRef } from "react";

interface WidgetResult1Props {}

export default function WidgetResult1({}: WidgetResult1Props) {
  const firstRef = useRef(true);

  useEffect(() => {
    if (firstRef.current) {
      firstRef.current = false;
      console.log("WidgetResult1 first mounted");
      return;
    }
    console.log("WidgetResult1 rerendered");
    return () => {
      console.log("WidgetResult1 unmounted");
    };
  });

  return <h1>Widget Result 2</h1>;
}
