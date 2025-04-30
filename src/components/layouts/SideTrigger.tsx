import { ArrowRight } from "lucide-react";
import { FC } from "react";
import { useSidebar } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
const SideTrigger: FC = () => {
  const { open, toggleSidebar } = useSidebar();
  return (
    <Button onClick={toggleSidebar} className="absolute right-[100%] top-[13%] translate-x-1/2 cursor-pointer bg-amber-700">
      <ArrowRight className={`${!open ? "rotate-180" : ""} `} />
    </Button>
  );
};

export default SideTrigger;
