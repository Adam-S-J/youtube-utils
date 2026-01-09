import { PanelLeft } from "lucide-react";
import { useSidebar } from "./SidebarContext";
import { useTheme } from "next-themes";
import SidebarNav from "./SidebarNav";
import { Link } from "@tanstack/react-router";
import YoutubeUtilsIcon from "@/assets/Icons/YoutubeUtilsIcon";
import clsx from "clsx";
import ThemeSwitch from "@/components/ui/ThemeSwitch/ThemeSwitch";
import { THEME_TYPES } from "@/consts";

const DesktopSidebar = () => {
  const { collapsed, toggleCollapsed } = useSidebar();
  const { theme } = useTheme();

  return (
    <aside
      className={clsx(
        "hidden h-screen border-r border-zinc-300 bg-white transition-[width] duration-300 md:flex md:flex-col dark:border-zinc-700 dark:bg-zinc-800",
        collapsed ? "w-16" : "w-72"
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
              "overflow-hidden transition-all duration-300",
              collapsed ? "max-w-0 opacity-0" : "max-w-[160px] opacity-100"
            )}
          >
            <YoutubeUtilsIcon
              className="w-24"
              theme={
                theme === THEME_TYPES.LIGHT
                  ? THEME_TYPES.LIGHT
                  : THEME_TYPES.DARK
              }
            />
          </Link>
        )}
        <button
          onClick={toggleCollapsed}
          className="cursor-pointer rounded-full p-2 hover:bg-gray-200 dark:hover:bg-white dark:hover:text-black"
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
