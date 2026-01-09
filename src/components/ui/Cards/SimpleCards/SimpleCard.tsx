import type { FC } from "react";
import type { SimpleCardTypes } from "./SimpleCard.types";
import { Link } from "@tanstack/react-router";
import { NAVIGATION_TYPES } from "@/consts";

const SimpleCard: FC<SimpleCardTypes> = ({
  icon: Icon,
  title,
  text,
  navigation,
}) => {
  const cardContent = (
    <>
      <Icon className="h-8 w-8" />
      <h3 className="my-2 text-xl font-semibold">{title}</h3>
      <p>{text}</p>
    </>
  );

  const cardClasses =
    "flex h-full cursor-pointer flex-col items-center rounded-md border border-zinc-300 p-6 text-center transition hover:scale-102 shadow-lg dark:bg-zinc-800 dark:border-0";

  if (navigation.type === NAVIGATION_TYPES.EXTERNAL) {
    return (
      <a
        href={navigation.link}
        target="_blank"
        rel="noopener noreferrer"
        className={cardClasses}
      >
        {cardContent}
      </a>
    );
  }

  return (
    <Link to={navigation.link} className={cardClasses}>
      {cardContent}
    </Link>
  );
};

export default SimpleCard;
