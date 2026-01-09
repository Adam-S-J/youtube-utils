import type { FC } from "react";
import { FOOTER_LINKS } from "@/consts";
import { Link } from "@tanstack/react-router";

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center inset-shadow-sm dark:bg-zinc-800">
      <div className="py-6">
        <div className="mb-4 flex flex-wrap justify-center gap-6 text-sm">
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="transition hover:underline"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="test"></div>
        <div className="my-4 border-t border-zinc-300 dark:border-zinc-700" />
        <p className="text-sm">
          © {currentYear} YouTube Utils. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
