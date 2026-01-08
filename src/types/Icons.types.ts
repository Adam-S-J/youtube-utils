import type { SVGProps } from "react";

export interface IconTypes extends SVGProps<SVGSVGElement> {
  className?: string;
  theme?: "light" | "dark";
}
