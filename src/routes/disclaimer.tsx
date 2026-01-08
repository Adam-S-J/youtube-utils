import { createFileRoute } from "@tanstack/react-router";
import { NAVIGATION_ROUTES } from "@/consts";

export const Route = createFileRoute(NAVIGATION_ROUTES.DISCLAIMER)({
  component: Disclaimer,
});

function Disclaimer() {
  return <p className="text-4xl">Disclaimer</p>;
}

export default Disclaimer;
