import {
  HeadContent,
  Scripts,
  createRootRouteWithContext,
} from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";
import appCss from "../styles.css?url";
import Sidebar from "@/components/modules/Sidebar/Sidebar";
import type { QueryClient } from "@tanstack/react-query";

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "TanStack Start Starter",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
    scripts: [
      {
        children: `
      (function () {
        try {
          const stored = localStorage.getItem("theme");
          const theme = stored
            ? JSON.parse(stored).state.theme
            : window.matchMedia("(prefers-color-scheme: dark)").matches
              ? "dark"
              : "light";

          document.documentElement.classList.add(theme);
          document.documentElement.style.colorScheme = theme;
        } catch (e) {
          document.documentElement.classList.add("light");
        }
      })();
        `,
      },
    ],
  }),

  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1">{children}</main>
          <TanStackDevtools
            config={{
              position: "bottom-right",
            }}
            plugins={[
              {
                name: "Tanstack Router",
                render: <TanStackRouterDevtoolsPanel />,
              },
            ]}
          />
        </div>
        <Scripts />
      </body>
    </html>
  );
}
