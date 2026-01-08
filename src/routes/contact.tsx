import { createFileRoute } from "@tanstack/react-router";
import { NAVIGATION_ROUTES } from "@/consts";

export const Route = createFileRoute(NAVIGATION_ROUTES.CONTACT)({
  component: Contact,
});

function Contact() {
  return <p className="text-4xl">Contact</p>;
}
