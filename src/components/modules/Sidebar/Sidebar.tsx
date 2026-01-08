import { SidebarProvider } from "./SidebarProvider";
import DesktopSidebar from "./DesktopSidebar";
import MobileSidebar from "./MobileSidebar";

const Sidebar = () => {
  return (
    <SidebarProvider>
      <MobileSidebar />
      <DesktopSidebar />
    </SidebarProvider>
  );
};

export default Sidebar;
