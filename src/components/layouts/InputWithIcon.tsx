import { Input } from "@/components/ui/input";
import { LucideIcon } from "lucide-react";

interface InputWithIconProps {
  placeholder: string;
  icon: LucideIcon;
  type?: string;
  className?: string;
}

const InputWithIcon: React.FC<InputWithIconProps> = ({ placeholder, icon: Icon, type = "text", className = "" }) => {
  return (
    <div className="relative">
      <Icon className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500" size={25} />
      <Input type={type} placeholder={placeholder} className={`pr-10 ${className}`} dir="rtl" />
    </div>
  );
};

export default InputWithIcon;
