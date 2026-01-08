import { createFileRoute } from "@tanstack/react-router";
import { NAVIGATION_ROUTES } from "@/consts";

export const Route = createFileRoute(
  NAVIGATION_ROUTES.YOUTUBE_THUMBNAIL_DOWNLOADER
)({
  component: YoutubeThumbnailDownloader,
});

function YoutubeThumbnailDownloader() {
  return <p className="text-4xl">Thumbnail Downloader</p>;
}

export default YoutubeThumbnailDownloader;
