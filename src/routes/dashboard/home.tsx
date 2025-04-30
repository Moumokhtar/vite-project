import { CardAnalysis } from "@/components/layouts/CardAnalysis";
import { CardsList } from "@/components/layouts/Cardinfo";
import { DatePickerWithRange } from "@/components/layouts/DateRange";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/home")({
  component: DashboardLayout,
});

export function DashboardLayout() {
  return (
    <>
      <div className="p-2">
        <DatePickerWithRange />
      </div>
      <CardsList />
      <div className="py-2 ">
        <CardAnalysis />
      </div>
      <div className="grid grid-cols-3 grid-rows-1"></div>
    </>
  );
}
