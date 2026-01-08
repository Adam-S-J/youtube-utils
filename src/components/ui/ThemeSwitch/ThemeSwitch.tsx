import { FC } from "react";
import { ThemeSwitchProps } from "./ThemeSwitch.types";
import { useThemeStore } from "@/store/themeStore";
import { useSidebar } from "@/components/modules/Sidebar/SidebarContext";
import { Moon, Sun } from "lucide-react";
import { THEME_TYPES } from "@/consts";

const ThemeSwitcher: FC<ThemeSwitchProps> = ({ isMobile = false }) => {
  const { theme, setTheme } = useThemeStore();
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
          className="rounded-full p-2 hover:bg-gray-200"
        >
          {theme === "light" ? (
            <Sun className="h-5 w-5 cursor-pointer" />
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
        className="rounded-full p-1 hover:bg-gray-200"
      >
        {theme === "light" ? (
          <Sun className="w-6 cursor-pointer" />
        ) : (
          <Moon className="w-6 cursor-pointer" />
        )}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
