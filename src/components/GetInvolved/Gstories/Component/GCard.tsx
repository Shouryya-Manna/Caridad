"use client";

import Card from "@/components/Global/Card/Card";
import UnderlinedText from "@/components/Global/UnderlinedText";
import { GStoriesData } from "@/data/GStories.data";
import { cn } from "@/lib/utils";
import { Smile } from "lucide-react";

export default function GCard() {
  return (
    <section className="max-w-8xl mx-auto w-full grid grid-cols-3 px-7.5 mt-30 py-30 gap-x-20">
      {GStoriesData.map((card, index) => (
        <div
          key={index}
          className={cn(
            "flex flex-col items-start",
            index === 1 && "justify-center"
          )}
        >
          <Card card={card}>
            <div
              className={cn(
                "relative h-[330px] w-[280px]"
              )}
            >
              <Card.Image />
            </div>

            <Card.Title />
            <div className="flex items-center gap-3.5 text-base text-tertiary my-3.5">
              <Smile className="h-5 w-5" />
              <Card.Designation />
            </div>
            <Card.Paragraph />
          </Card>
        </div>
      ))}
    </section>
  );
}
