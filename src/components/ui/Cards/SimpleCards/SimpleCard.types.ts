import type { NavigationType } from "@/consts";
import type { ComponentType, SVGProps } from "react";

export type SimpleCardTypes = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  text: string;
  navigation: {
    type: NavigationType;
    link: string;
  };
};
