import type { SimpleCardTypes } from "./SimpleCard.types";
import { NAVIGATION_TYPES, NAVIGATION_ROUTES } from "@/consts";
import SimpleCard from "./SimpleCard";
import { Image, FileText, Link2, Code, QrCode } from "lucide-react";

export const YoutubeUtilsCards = () => {
  const YoutubeUtils: SimpleCardTypes[] = [
    {
      icon: Image,
      title: "Thumbnail Downloader",
      text: "Download high-quality thumbnails from any YouTube video instantly",
      navigation: {
        type: NAVIGATION_TYPES.INTERNAL,
        link: NAVIGATION_ROUTES.YOUTUBE_THUMBNAIL_DOWNLOADER,
      },
    },
    {
      icon: FileText,
      title: "Captions & Transcripts Downloader",
      text: "Extract and download captions in SRT, VTT, TXT, or JSON format",
      navigation: {
        type: NAVIGATION_TYPES.INTERNAL,
        link: NAVIGATION_ROUTES.YOUTUBE_CAPTIONS_DOWNLOADER,
      },
    },
    {
      icon: Link2,
      title: "Link Generator",
      text: "Generate standard, shortened, embed, and shorts links instantly",
      navigation: {
        type: NAVIGATION_TYPES.INTERNAL,
        link: NAVIGATION_ROUTES.YOUTUBE_LINK_GENERATOR,
      },
    },
    {
      icon: Code,
      title: "IFrame Generator",
      text: "Create customizable embed codes to add videos to your website",
      navigation: {
        type: NAVIGATION_TYPES.INTERNAL,
        link: NAVIGATION_ROUTES.YOUTUBE_IFRAME_GENERATOR,
      },
    },
    {
      icon: QrCode,
      title: "QR Code Generator",
      text: "Create scannable QR codes that link directly to any YouTube video",
      navigation: {
        type: NAVIGATION_TYPES.INTERNAL,
        link: NAVIGATION_ROUTES.YOUTUBE_QR_CODE_GENERATOR,
      },
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      {YoutubeUtils.map((tool) => {
        return <SimpleCard {...tool} />;
      })}
    </div>
  );
};
