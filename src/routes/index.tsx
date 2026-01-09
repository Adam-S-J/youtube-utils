import { createFileRoute } from "@tanstack/react-router";
import { NAVIGATION_ROUTES, THEME_TYPES } from "@/consts";
import { useTheme } from "next-themes";
import YoutubeUtilsIcon from "@/assets/Icons/YoutubeUtilsIcon";
import ContentLayout from "@/layouts/ContentLayout";
import { OtherToolsCards } from "@/components/ui/Cards/SimpleCards/OtherToolsCards";
import { YoutubeUtilsCards } from "@/components/ui/Cards/SimpleCards/YoutubeUtilsCards";
import Accordion from "@/components/ui/Accordion/Accordion";
import { homepageFaqs } from "@/config/faqs/homepageFaqs";

export const Route = createFileRoute(NAVIGATION_ROUTES.HOME)({
  component: Home,
});

function Home() {
  const { theme } = useTheme();
  return (
    <ContentLayout>
      <div className="pb-6 md:pb-12">
        <section aria-labelledby="main-heading" className="my-12 text-center">
          <header className="my-12 text-center">
            <YoutubeUtilsIcon
              className="mx-auto mb-8 h-32 w-64"
              theme={
                theme === THEME_TYPES.LIGHT
                  ? THEME_TYPES.LIGHT
                  : THEME_TYPES.DARK
              }
            />
            <h1 id="main-heading" className="text-4xl font-bold">
              Free YouTube Tools to Download Thumbnails, Captions & More
            </h1>
            <p className="mx-auto mt-4 max-w-xl">
              Download YouTube thumbnails, captions, and transcripts. Generate
              video links, embed codes, and QR codes for any YouTube video.
              Fast, simple, and completely free — no signup required.
            </p>
          </header>
        </section>
        <section aria-labelledby="other-tools-heading" className="py-12">
          <h2
            id="other-tools-heading"
            className="mb-6 text-center text-3xl font-semibold"
          >
            Explore Our Other Tools
          </h2>
          <OtherToolsCards />
        </section>
        <section aria-labelledby="youtube-utils-heading" className="py-12">
          <h2
            id="youtube-utils-heading"
            className="mb-6 text-center text-3xl font-semibold"
          >
            YouTube Utils
          </h2>
          <YoutubeUtilsCards />
        </section>
        <section aria-labelledby="home-faq-heading" className="md:mt-10">
          <Accordion
            id="home-faq-heading"
            title="YouTube Utils Frequently Asked Questions"
            faqs={homepageFaqs}
          />
        </section>
      </div>
    </ContentLayout>
  );
}

export default Home;
