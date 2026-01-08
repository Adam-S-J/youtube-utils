import { createFileRoute } from "@tanstack/react-router";
import { NAVIGATION_ROUTES } from "@/consts";

export const Route = createFileRoute(
  NAVIGATION_ROUTES.YOUTUBE_QR_CODE_GENERATOR
)({
  component: YoutubeQRCodeGenerator,
});

function YoutubeQRCodeGenerator() {
  return <p className="text-4xl">QR Code Generator</p>;
}

export default YoutubeQRCodeGenerator;
