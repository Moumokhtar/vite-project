import { ArrowLeft, FileText, Folder, Pencil } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Props for the custom card component
interface CustomCardProps {
  icon: React.ReactNode;
  number: number;
  text: string;
  bgColor: string;
}

const CustomCard: React.FC<CustomCardProps> = ({ icon, number, text, bgColor }) => {
  return (
    <Card className={`${bgColor} rounded-lg w-[390px] h-[140px] shadow-none border-none`}>
      <CardContent className="flex items-center justify-between w-full ">
        <div className="flex flex-col items-start">
          <span className="text-gray-600 text-[18px]">{text}</span>
          <span className="font-bold text-[60px] text-gray-800">{number}</span>
        </div>

        <div className="flex flex-col items-center gap-3">
          {icon}
          <div className="flex items-center flex-row-reverse gap-1">
            <ArrowLeft size={20} className="text-gray-500" />
            <p>الكل</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// Parent component to render all cards
export function CardsList() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {/* Card 1 */}
      <CustomCard icon={<FileText size={45} className="text-gray-600" />} number={720} text="المعاملات" bgColor="bg-gray-200" />
      {/* Card 2 */}
      <CustomCard icon={<Folder size={45} className="text-yellow-500" />} number={540} text="زيارات التفتيش" bgColor="bg-yellow-50" />
      {/* Card 3 */}
      <CustomCard icon={<Pencil size={45} className="text-gray-600" />} number={859} text="زيارات التكليفات" bgColor="bg-blue-100" />
    </div>
  );
}
