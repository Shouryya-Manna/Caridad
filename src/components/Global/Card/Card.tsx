import { cn } from "@/lib/utils";
import Image from "next/image";
import {
  createContext,
  PropsWithChildren,
  useContext,
} from "react";

type CardContextType = PropsWithChildren & {
  card: CardType;
};

const CardContext =
  createContext<CardContextType | null>(null);

// Custom Hook
function useCardContext() {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error(
      "useCardContext not used in the correct position"
    );
  }
  return context;
}

type CardType = {
  image: string;
  title: string;
  smile?: string;
  designation?: string;
  paragraph?: string;
  donation?: React.FC;
  button?: React.FC;
};

export default function Card({
  children,
  card,
}: CardContextType) {
  return (
    <CardContext.Provider value={{ card }}>
      {children}
    </CardContext.Provider>
  );
}

// Compulsory Image
Card.Image = function CardImage() {
  const { card } = useCardContext();
  return (
    <div
      className={cn(
        "relative h-[330px] w-[280px]"
      )}
    >
      <Image
        src={card.image}
        alt=""
        fill
        className="object-cover object-top"
      />
    </div>
  );
};

// Compulsory Title
Card.Title = function CardTitle() {
  const { card } = useCardContext();
  return (
    <h3 className="mt-6 text-2xl font-bold">
      {card.title}
    </h3>
  );
};

// Designation
Card.Designation = function CardDesignation() {
  const { card } = useCardContext();
  return (
    <p className="text-base text-tertiary mt-1">
      {card.designation}
    </p>
  );
};

// Paragraph
Card.Paragraph = function CardParagraph() {
  const { card } = useCardContext();
  return (
    <p className="text-base max-w-[260px] leading-relaxed">
      {card.paragraph}
    </p>
  );
};
