export type SidebarContextTypes = {
  collapsed: boolean;
  toggleCollapsed: () => void;
  mobileOpen: boolean;
  openMobile: () => void;
  closeMobile: () => void;
};

export type SidebarNavProps = {
  isMobile?: boolean;
};
