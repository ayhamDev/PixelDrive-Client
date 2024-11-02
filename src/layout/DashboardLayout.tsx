import AppBar from "@/components/custom/AppBar";
import AppSideBar from "@/components/custom/AppSideBar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="h-screen w-screen">
      <SidebarProvider>
        <AppSideBar />

        <main className="w-full h-screen relative">
          {/* appbar */}
          <AppBar />
          <Outlet />
        </main>
        {/* page */}
      </SidebarProvider>
    </div>
  );
};

export default DashboardLayout;
