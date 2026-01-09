import type { FC } from "react";
import type { ThemeSwitchProps } from "./ThemeSwitch.types";
import { useSidebar } from "@/components/modules/Sidebar/SidebarContext";
import { Moon, Sun } from "lucide-react";
import { THEME_TYPES } from "@/consts";
import { useTheme } from "next-themes";

const ThemeSwitcher: FC<ThemeSwitchProps> = ({ isMobile = false }) => {
  const { theme, setTheme } = useTheme();
  const { collapsed } = useSidebar();

  const { LIGHT, DARK } = THEME_TYPES;

  const toggleTheme = () => {
    setTheme(theme === LIGHT ? DARK : LIGHT);
  };

  if (collapsed && !isMobile) {
    return (
      <div className="flex items-center justify-center">
        <button
          onClick={toggleTheme}
          className="cursor-pointer rounded-full p-2 hover:bg-gray-200 dark:hover:bg-white dark:hover:text-black"
        >
          {theme === "light" ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5 cursor-pointer" />
          )}
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-between">
      <p>Theme</p>
      <button
        onClick={toggleTheme}
        className="cursor-pointer rounded-full p-1 hover:bg-gray-200 dark:hover:bg-white dark:hover:text-black"
      >
        {theme === "light" ? <Sun className="w-6" /> : <Moon className="w-6" />}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
