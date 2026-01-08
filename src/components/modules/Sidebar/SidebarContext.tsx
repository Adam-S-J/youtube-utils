import { createContext, useContext } from "react";
import { SidebarContextTypes } from "./Sidebar.types";

export const SidebarContext = createContext<SidebarContextTypes | null>(null);
export const useSidebar = () => {
  const ctx = useContext(SidebarContext);
  if (!ctx) {
    throw new Error("useSidebar must be used within SidebarProvider");
  }
  return ctx;
};
