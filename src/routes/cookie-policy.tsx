import { createFileRoute } from "@tanstack/react-router";
import { NAVIGATION_ROUTES } from "@/consts";

export const Route = createFileRoute(NAVIGATION_ROUTES.COOKIE_POLICY)({
  component: CookiPolicy,
});

function CookiPolicy() {
  return <p className="text-4xl">Cookie Policy</p>;
}

export default CookiPolicy;
