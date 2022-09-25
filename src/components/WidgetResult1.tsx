interface WidgetResult1Props {
  label: string;
}

export default function WidgetResult1({ label }: WidgetResult1Props) {
  return <h1>{label}</h1>;
}

WidgetResult1.defaultProps = {
  label: "WidgetResult1",
};
