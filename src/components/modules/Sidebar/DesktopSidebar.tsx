import { PanelLeft } from "lucide-react";
import { useSidebar } from "./SidebarContext";
import SidebarNav from "./SidebarNav";
import { Link } from "@tanstack/react-router";
import YoutubeUtilsIcon from "@/assets/Icons/YoutubeUtilsIcon";
import clsx from "clsx";
import ThemeSwitch from "@/components/ui/ThemeSwitch/ThemeSwitch";

const DesktopSidebar = () => {
  const { collapsed, toggleCollapsed } = useSidebar();

  return (
    <aside
      className={clsx(
        "hidden h-screen border-r bg-white transition-all duration-300 md:flex md:flex-col",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div
        className={clsx(
          "flex h-14 items-center px-3",
          collapsed ? "justify-center" : "justify-between"
        )}
      >
        {!collapsed && (
          <Link
            to="/"
            className={clsx(
              "overflow-hidden transition-[max-width,opacity,transform] duration-300",
              collapsed
                ? "max-w-0 -translate-x-2 opacity-0"
                : "max-w-[160px] translate-x-0 opacity-100"
            )}
          >
            <YoutubeUtilsIcon className="w-24" />
          </Link>
        )}
        <button
          onClick={toggleCollapsed}
          className="cursor-pointer rounded-full p-2 hover:bg-gray-200"
        >
          <PanelLeft className="h-5 w-5" />
        </button>
      </div>
      <div className="mt-4 flex-1">
        <SidebarNav />
      </div>
      <div className="p-3">
        <ThemeSwitch />
      </div>
    </aside>
  );
};

export default DesktopSidebar;
