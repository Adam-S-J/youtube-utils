import { createFileRoute } from "@tanstack/react-router";
import { NAVIGATION_ROUTES } from "@/consts";

export const Route = createFileRoute(
  NAVIGATION_ROUTES.YOUTUBE_IFRAME_GENERATOR
)({
  component: YoutubeIframeGenerator,
});

function YoutubeIframeGenerator() {
  return <p className="text-4xl">Iframe Generator</p>;
}

export default YoutubeIframeGenerator;
