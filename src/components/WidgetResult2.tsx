interface WidgetResult2Props {
  label: string;
}

export default function WidgetResult2({ label }: WidgetResult2Props) {
  return <h1>{label}</h1>;
}

WidgetResult2.defaultProps = {
  label: "WidgetResult2",
};
