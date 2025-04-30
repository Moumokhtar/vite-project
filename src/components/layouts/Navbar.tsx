import { FC } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Bell, ChevronDown, LogOut, Search, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

import InputWithIcon from "./InputWithIcon";
import Options from "./Options";

const Navbar: FC = () => {
  return (
    <nav className="p-[31px]">
      <div className="flex gap-1.5 justify-between">
        <div className="flex gap-1.5 items-center">
          <Avatar className="rounded-md h-14 w-14">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <div className="flex cursor-pointer">
                  <p>حازم محمد زغلول</p>
                  <ChevronDown />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <div className="flex gap-1.5 items-center">
                    <div className="flex flex-col items-end">
                      <p>حازم محمد زغلول</p>
                      <p>سوبر أدمن</p>
                    </div>
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <div className="flex gap-1.5 items-center">
                    <div className="flex flex-col items-end">
                      <p>حازم محمد زغلول</p>
                      <p>سوبر أدمن</p>
                    </div>
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <div className="flex gap-1.5 items-center">
                    <div className="flex flex-col items-end">
                      <p>حازم محمد زغلول</p>
                      <p>سوبر أدمن</p>
                    </div>
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <div className="flex gap-1.5 items-center">
                    <div className="flex flex-col items-end">
                      <p>حازم محمد زغلول</p>
                      <p>سوبر أدمن</p>
                    </div>
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <div className="flex flex-row-reverse items-end gap-1.5 cursor-pointer">
                  <LogOut className="rotate-180" />
                  <p>تسجيل الخروج</p>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
            <p>سوبر أدمن</p>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <Options />
          <InputWithIcon placeholder="أبحث عن ..." icon={Search} className="placeholder:text-base" />
          <Button variant="outline" className="cursor-pointer ">
            EN
          </Button>
          <Bell size={30} />
          <Settings size={30} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
