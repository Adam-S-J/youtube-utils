import type { SimpleCardTypes } from "./SimpleCard.types";
import { NAVIGATION_TYPES } from "@/consts";
import SimpleCard from "./SimpleCard";
import InstagramIcon from "@/assets/Icons/InstagramIcon";
import FacebookIcon from "@/assets/Icons/FacebookIcon";
import TwitterIcon from "@/assets/Icons/TwitterIcon";
import TikTokIcon from "@/assets/Icons/TikTokIcon";

export const OtherToolsCards = () => {
  const OtherTools: SimpleCardTypes[] = [
    {
      icon: InstagramIcon,
      title: "Instagram Utils",
      text: "Download photos, videos, and stories from Instagram posts and reels",
      navigation: {
        type: NAVIGATION_TYPES.EXTERNAL,
        link: "",
      },
    },
    {
      icon: FacebookIcon,
      title: "Facebook Utils",
      text: "Extract and download videos, photos, and content from Facebook",
      navigation: {
        type: NAVIGATION_TYPES.EXTERNAL,
        link: "",
      },
    },
    {
      icon: TwitterIcon,
      title: "Twitter/X Utils",
      text: "Download videos, GIFs, and images from tweets and threads",
      navigation: {
        type: NAVIGATION_TYPES.EXTERNAL,
        link: "",
      },
    },
    {
      icon: TikTokIcon,
      title: "TikTok Utils",
      text: "Save TikTok videos without watermarks in high quality",
      navigation: {
        type: NAVIGATION_TYPES.EXTERNAL,
        link: "",
      },
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      {OtherTools.map((card) => {
        return <SimpleCard {...card} />;
      })}
    </div>
  );
};
