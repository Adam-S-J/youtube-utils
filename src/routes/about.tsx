import { createFileRoute } from "@tanstack/react-router";
import { NAVIGATION_ROUTES } from "@/consts";

export const Route = createFileRoute(NAVIGATION_ROUTES.ABOUT)({
  component: About,
});

function About() {
  return <p className="text-4xl">About</p>;
}

export default About;
