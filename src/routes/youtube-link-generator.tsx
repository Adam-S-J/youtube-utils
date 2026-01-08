import { createFileRoute } from "@tanstack/react-router";
import { NAVIGATION_ROUTES } from "@/consts";

export const Route = createFileRoute(NAVIGATION_ROUTES.YOUTUBE_LINK_GENERATOR)({
  component: YoutubeLinkGenerator,
});

function YoutubeLinkGenerator() {
  return <p className="text-4xl">Link Generator</p>;
}

export default YoutubeLinkGenerator;
