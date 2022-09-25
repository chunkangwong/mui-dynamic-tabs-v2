import { useEffect, useRef } from "react";

interface WidgetResult2Props {}

export default function WidgetResult2({}: WidgetResult2Props) {
  const firstRef = useRef(true);

  useEffect(() => {
    if (firstRef.current) {
      firstRef.current = false;
      console.log("WidgetResult2 first mounted");
      return;
    }
    console.log("WidgetResult2 rerendered");
    return () => {
      console.log("WidgetResult2 unmounted");
    };
  });

  return <h1>Widget Result 2</h1>;
}
