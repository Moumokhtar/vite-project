import AppSidebar from "@/components/layouts/app-sidebar";
import Navbar from "@/components/layouts/Navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <Navbar />
        <div className="p-4 bg-[#F7F7F7]">
          <Outlet />
        </div>
      </main>
    </SidebarProvider>
  );
}
