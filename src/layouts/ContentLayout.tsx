import type { FC } from "react";
import type { Children } from "@/types/Children.types";

type ContentLayoutProps = {
  children: Children;
};

const ContentLayout: FC<ContentLayoutProps> = ({ children }) => {
  return <div className="mx-auto max-w-7xl p-4">{children}</div>;
};
export default ContentLayout;
