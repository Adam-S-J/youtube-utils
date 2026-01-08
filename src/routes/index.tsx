import { createFileRoute } from "@tanstack/react-router";
import { NAVIGATION_ROUTES } from "@/consts";

export const Route = createFileRoute(NAVIGATION_ROUTES.HOME)({
  component: Home,
});

function Home() {
  return <p className="text-4xl">Home</p>;
}

export default Home;
