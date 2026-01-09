import { Menu } from "lucide-react";
import { useSidebar } from "./SidebarContext";
import { useTheme } from "next-themes";
import SidebarNav from "./SidebarNav";
import { X } from "lucide-react";
import YoutubeUtilsIcon from "@/assets/Icons/YoutubeUtilsIcon";
import { Link } from "@tanstack/react-router";
import ThemeSwitch from "@/components/ui/ThemeSwitch/ThemeSwitch";
import { THEME_TYPES } from "@/consts";

const MobileSidebar = () => {
  const { mobileOpen, openMobile, closeMobile } = useSidebar();
  const { theme } = useTheme();

  return (
    <>
      <div className="flex h-14 items-center px-4 md:hidden">
        <Menu onClick={openMobile} className="cursor-pointer" />
      </div>
      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r border-zinc-300 bg-white transition-transform duration-300 md:hidden dark:border-zinc-700 dark:bg-zinc-800 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-14 items-center justify-between px-3">
          <Link to="/">
            <YoutubeUtilsIcon
              className="w-24"
              theme={
                theme === THEME_TYPES.LIGHT
                  ? THEME_TYPES.LIGHT
                  : THEME_TYPES.DARK
              }
            />
          </Link>
          <X onClick={closeMobile} />
        </div>
        <div className="mt-4 flex-1">
          <SidebarNav isMobile />
        </div>
        <div className="p-3">
          <ThemeSwitch isMobile />
        </div>
      </aside>
      {mobileOpen && (
        <div className="fixed inset-0 md:hidden" onClick={closeMobile} />
      )}
    </>
  );
};

export default MobileSidebar;
