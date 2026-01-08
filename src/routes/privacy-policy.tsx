import { createFileRoute } from "@tanstack/react-router";
import { NAVIGATION_ROUTES } from "@/consts";

export const Route = createFileRoute(NAVIGATION_ROUTES.PRIVACY_POLICY)({
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return <p className="text-4xl">Privacy Policy</p>;
}

export default PrivacyPolicy;
