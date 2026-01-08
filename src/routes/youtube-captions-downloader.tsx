import { createFileRoute } from "@tanstack/react-router";
import { NAVIGATION_ROUTES } from "@/consts";

export const Route = createFileRoute(
  NAVIGATION_ROUTES.YOUTUBE_CAPTIONS_DOWNLOADER
)({
  component: YoutubeCaptionsDownloader,
});

function YoutubeCaptionsDownloader() {
  return <p className="text-4xl">Captions downloader</p>;
}

export default YoutubeCaptionsDownloader;
