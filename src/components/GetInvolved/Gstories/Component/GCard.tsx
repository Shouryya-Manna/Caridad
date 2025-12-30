"use client";

import Card from "@/components/Global/Card/Card";
import UnderlinedText from "@/components/Global/UnderlinedText";
import { GStoriesData } from "@/data/GStories.data";
import { cn } from "@/lib/utils";

export default function GCard() {
  return (
    <section className="flex max-w-2xl w-full justify-center mx-auto gap-40">
      {GStoriesData.map((card, index) => (
        <div
          key={index}
          className={cn(
            "flex flex-col items-start",
            index === 1 && "mt-30"
          )}
        >
          <Card card={card}>
            <div className="relative h-[330px] w-[280px]">
              <Card.Image />
            </div>
            <Card.Title />
            <div className="flex items-center gap-3.5 text-base text-tertiary my-3.5">
              <Card.Designation />
            </div>
            <Card.Paragraph className="my-1 leading-loose" />

            <UnderlinedText
              text="Read more"
              className="mt-10 mx-0"
            />
          </Card>
        </div>
      ))}
    </section>
  );
}
