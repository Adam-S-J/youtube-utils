import { Home, Image, FileText, Link2, Code, QrCode } from "lucide-react";

export const BASE_URL = "https://youtubeutils.com";

/* Test URLS */

export const Works = "https://www.youtube.com/watch?v=bnxD1Tb0_V0";
export const fails = "https://www.youtube.com/watch?v=gKD-65F4Mxg";

/* Theme  */

export const THEME_TYPES = {
  LIGHT: "light",
  DARK: "dark",
} as const;

/* Navigation */

export const NAVIGATION_ROUTES = {
  HOME: "/",
  YOUTUBE_THUMBNAIL_DOWNLOADER: "/youtube-thumbnail-downloader",
  YOUTUBE_CAPTIONS_DOWNLOADER: "/youtube-captions-downloader",
  YOUTUBE_LINK_GENERATOR: "/youtube-link-generator",
  YOUTUBE_IFRAME_GENERATOR: "/youtube-iframe-generator",
  YOUTUBE_QR_CODE_GENERATOR: "/youtube-qr-code-generator",
  ABOUT: "/about",
  CONTACT: "/contact",
  PRIVACY_POLICY: "/privacy-policy",
  COOKIE_POLICY: "/cookie-policy",
  TERMS_OF_SERVICE: "/terms-of-service",
  DISCLAIMER: "/disclaimer",
} as const;

export const NAVIGATION_TYPES = {
  INTERNAL: "internal",
  EXTERNAL: "external",
} as const;

export const SIDEBAR_LINKS = [
  { label: "Home", icon: Home, href: NAVIGATION_ROUTES.HOME },
  {
    label: "Thumbnail Downloader",
    icon: Image,
    href: NAVIGATION_ROUTES.YOUTUBE_THUMBNAIL_DOWNLOADER,
  },
  {
    label: "Captions Downloader",
    icon: FileText,
    href: NAVIGATION_ROUTES.YOUTUBE_CAPTIONS_DOWNLOADER,
  },
  {
    label: "Link Generator",
    icon: Link2,
    href: NAVIGATION_ROUTES.YOUTUBE_LINK_GENERATOR,
  },
  {
    label: "IFrame Generator",
    icon: Code,
    href: NAVIGATION_ROUTES.YOUTUBE_IFRAME_GENERATOR,
  },
  {
    label: "QR Code Generator",
    icon: QrCode,
    href: NAVIGATION_ROUTES.YOUTUBE_QR_CODE_GENERATOR,
  },
];

export const FOOTER_LINKS = [
  { href: NAVIGATION_ROUTES.ABOUT, label: "About" },
  { href: NAVIGATION_ROUTES.CONTACT, label: "Contact" },
  { href: NAVIGATION_ROUTES.PRIVACY_POLICY, label: "Privacy Policy" },
  { href: NAVIGATION_ROUTES.COOKIE_POLICY, label: "Cookie Policy" },
  { href: NAVIGATION_ROUTES.TERMS_OF_SERVICE, label: "Terms of Service" },
  { href: NAVIGATION_ROUTES.DISCLAIMER, label: "Disclaimer" },
];
