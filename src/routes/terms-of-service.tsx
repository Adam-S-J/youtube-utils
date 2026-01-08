import { createFileRoute } from "@tanstack/react-router";
import { NAVIGATION_ROUTES } from "@/consts";

export const Route = createFileRoute(NAVIGATION_ROUTES.TERMS_OF_SERVICE)({
  component: TermsOfService,
});

function TermsOfService() {
  return <p className="text-4xl">Terms of Service</p>;
}

export default TermsOfService;
