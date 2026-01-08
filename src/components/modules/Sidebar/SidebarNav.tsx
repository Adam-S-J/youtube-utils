import { FC } from "react";
import { SidebarNavProps } from "./Sidebar.types";
import { useSidebar } from "./SidebarContext";
import clsx from "clsx";
import { SIDEBAR_LINKS } from "@/consts";
import { Link } from "@tanstack/react-router";

const SidebarNav: FC<SidebarNavProps> = ({ isMobile = false }) => {
  const { collapsed, closeMobile } = useSidebar();

  const handleLinkClick = () => {
    if (isMobile) {
      closeMobile();
    }
    return;
  };

  return (
    <nav className="space-y-2 p-2">
      {SIDEBAR_LINKS.map((item) => (
        <Link
          key={item.href}
          to={item.href}
          onClick={handleLinkClick}
          className={clsx(
            "ml-[6px] flex items-center gap-2 rounded-md",
            !collapsed && "hover:bg-gray-200"
          )}
        >
          <div
            className={clsx(
              "p-2",
              collapsed && "rounded-full hover:bg-gray-200"
            )}
          >
            <item.icon className="h-5 w-5" />
          </div>
          <p
            className={clsx(
              "overflow-hidden whitespace-nowrap transition-[max-width,opacity] duration-300",
              collapsed && !isMobile ? "max-w-0 opacity-0" : "opacity-100"
            )}
          >
            {item.label}
          </p>
        </Link>
      ))}
    </nav>
  );
};

export default SidebarNav;
