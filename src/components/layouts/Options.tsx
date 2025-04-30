import { FC } from "react";
import { CircleDollarSign, Command, MonitorCog, Package, ScrollText, ShoppingCart, UserSearch } from "lucide-react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";

const Options:FC = () => {
  return (
    <DropdownMenu dir="rtl">
      <DropdownMenuTrigger className="cursor-pointer">
        <Command size={30} />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <div className="grid grid-cols-3 grid-rows-2 gap-4 justify-items-center items-center">
          <DropdownMenuItem>
            <div className="flex flex-col items-center justify-center  cursor-pointer">
              <CircleDollarSign className="!w-10 !h-10" />
              <p>حسابات</p>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <div className="flex flex-col items-center justify-center  cursor-pointer">
              <ScrollText className="!w-10 !h-10" />
              <p>مبيعات</p>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <div className="flex flex-col items-center justify-center  cursor-pointer">
              <ShoppingCart className="!w-10 !h-10" />
              <p>مشتريات</p>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <div className="flex flex-col items-center justify-center  cursor-pointer">
              <Package className="!w-10 !h-10" />
              <p>مخزون</p>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <div className="flex flex-col items-center justify-center  cursor-pointer">
              <MonitorCog className="!w-10 !h-10" />
              <p>خدمات</p>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <div className="flex flex-col items-center justify-center  cursor-pointer">
              <UserSearch className="!w-10 !h-10" />
              <p>HR</p>
            </div>
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Options;
