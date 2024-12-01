import { createFileRoute } from "@tanstack/react-router";
import Charts from "../../../widgets/charts";

export const Route = createFileRoute("/_layout/chart/")({
  component: ChartPage,
});

function ChartPage() {
  return <Charts />;
}
