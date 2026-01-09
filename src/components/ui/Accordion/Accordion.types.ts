type AccordionItem = {
  question: string;
  answer: string;
};

export type AccordionSectionProps = {
  id: string;
  title: string;
  faqs: AccordionItem[];
};
