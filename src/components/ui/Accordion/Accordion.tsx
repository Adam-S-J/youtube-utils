import type { FC } from "react";
import type { AccordionSectionProps } from "./Accordion.types";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronUp } from "lucide-react";

const Accordion: FC<AccordionSectionProps> = ({ id, title, faqs }) => {
  return (
    <div className="md:mt-10">
      <h2 id={id} className="mb-6 text-2xl font-bold">
        {title}
      </h2>
      <div className="space-y-2">
        {faqs.map((faq, index) => (
          <Disclosure key={index}>
            {({ open }) => (
              <div>
                <DisclosureButton className="flex w-full cursor-pointer items-center justify-between rounded-lg border border-zinc-300 px-4 py-3 text-left font-medium shadow-lg hover:bg-zinc-200 dark:border-0 dark:bg-zinc-800 dark:hover:bg-zinc-700">
                  <span className="w-4/5 md:w-full">{faq.question}</span>
                  <ChevronUp
                    className={`h-5 w-5 transform transition-transform duration-200 ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </DisclosureButton>
                <DisclosurePanel className="ml-4 rounded-md p-4">
                  {faq.answer}
                </DisclosurePanel>
              </div>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
