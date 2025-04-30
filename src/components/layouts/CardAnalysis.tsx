import { ArrowLeft } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface CustomCardProps {
  text: string;
  bgColor: string;
}

const CustomCard: React.FC<CustomCardProps> = ({ text, bgColor }) => {
  return (
    <Card className={`flex-col ${bgColor} rounded-lg w-[550px] h-[254px] shadow-none border-none`}>
      <CardHeader className="mt-2.5">
        <div className="flex justify-between py-3.5 px-2 bg-[#D0B166] rounded-t-[20px]">
          <span className="text-gray-600 text-[20px]">{text}</span>
          <div className="flex items-center">
            <span className="text-gray-600 text-[20px]">الكل</span>
            <ArrowLeft size={20} className="text-gray-500" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="w-full">
        <div className="grid grid-cols-4 grid-rows-2">
          <div className="flex flex-col items-center">
            <span className="text-gray-600 text-[16px]">جديدة</span>
            <span className="font-bold text-[25px] text-gray-800">720</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-gray-600 text-[16px]">قيد الدراسة</span>
            <span className="font-bold text-[25px] text-gray-800">920</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-gray-600 text-[16px]">معادة من العملاء</span>
            <span className="font-bold text-[25px] text-gray-800">585</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-gray-600 text-[16px]">مستحقة الدفع</span>
            <span className="font-bold text-[25px] text-gray-800">654</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-gray-600 text-[16px]">مدفوعة</span>
            <span className="font-bold text-[25px] text-gray-800">90</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-gray-600 text-[16px]">معادة من العملاء</span>
            <span className="font-bold text-[25px] text-gray-800">20</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export function CardAnalysis() {
  return (
    <div className="grid grid-cols-2 justify-items-center">
      <CustomCard text="معاملات مقدمي الخدمة" bgColor="bg-gray-200" />
      <CustomCard text="معاملات متابعة الإدارة" bgColor="bg-gray-200" />
    </div>
  );
}
