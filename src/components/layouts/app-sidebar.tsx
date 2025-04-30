import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar";
import Logo from "../../assets/images/logo.png";
import Logo2 from "../../assets/images/Logo2.png";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

import SideTrigger from "./SideTrigger";
import { Calendar, ChevronDown, FileText, Home, Inbox, Layers, LogOut, Search, Settings, User } from "lucide-react";
import { FC } from "react";

const AppSidebar: FC = () => {
  const { state } = useSidebar();
  const serviceManagementSubmenu = [
    {
      title: "طلبات الخدمة",
      url: "#/service-requests",
      icon: FileText,
    },
    {
      title: "إدارة المستخدمين",
      url: "#/user-management",
      icon: User,
    },
    {
      title: "الخدمات المتاحة",
      url: "#/available-services",
      icon: Layers,
    },
  ];

  const items = [
    {
      title: "البيانات الرئيسية ",
      url: "#",
      icon: Home,
      size: 50,
    },
    {
      title: "إدارة الخدمات ",
      url: "#",
      icon: Inbox,
      size: 50,
      hasSubmenu: true,
      submenuItems: serviceManagementSubmenu,
    },
    {
      title: "إدارة النظام ",
      url: "#",
      icon: Calendar,
      size: 50,
    },
    {
      title: "إدارة الموقع ",
      url: "#",
      icon: Search,
      size: 50,
    },
    {
      title: "المعاملات",
      url: "#",
      icon: Settings,
      size: 50,
    },
  ];

  return (
    <Sidebar side="right" collapsible="icon" className="bg-[#011224]">
      <SidebarHeader>{state === "collapsed" ? <img src={Logo2} alt="Icon Logo" className="h-10 w-10" /> : <img src={Logo} alt="Full Logo" />}</SidebarHeader>
      <SidebarContent className="justify-center">
        <SideTrigger />
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="gap-3">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {item.hasSubmenu ? (
                    <Collapsible defaultOpen className="group/collapsible">
                      <CollapsibleTrigger className="cursor-pointer" asChild>
                        <SidebarMenuButton className="text-[#FFFFFF80] w-full ">
                          <item.icon />
                          <span className="text-[18px]">{item.title}</span>
                          <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub className="border-0">
                          {item.submenuItems.map((subItem) => (
                            <SidebarMenuSubItem key={subItem.title}>
                              <a href={subItem.url} className="flex items-center gap-2 text-[#FFFFFF80] hover:text-white py-1 px-2 rounded-md hover:bg-[#ffffff10] transition-colors">
                                <subItem.icon className="h-4 w-4" />
                                <span className="text-[16px]">{subItem.title}</span>
                              </a>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </Collapsible>
                  ) : (
                    <SidebarMenuButton className="text-[#FFFFFF80]" asChild>
                      <a href={item.url} className="gap-3">
                        <item.icon />
                        <span className="text-[18px]">{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenuButton className="text-[#FFFFFF80]" asChild>
          <a href="#">
            <LogOut />
            <span className="text-[18px]">تسجيل الخروج</span>
          </a>
        </SidebarMenuButton>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
