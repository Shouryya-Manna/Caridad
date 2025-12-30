"use client";

import Card from "@/components/Global/Card/Card";
import UnderlinedText from "@/components/Global/UnderlinedText";
import { GStoriesData } from "@/data/GStories.data";
import { cn } from "@/lib/utils";
import { Smile } from "lucide-react";

export default function GCard() {
  return (
    <section className="flex max-w-3xl w-full mx-auto">
      {GStoriesData.map((card, index) => (
        <div
          key={index}
          className="flex flex-col items-start"
        >
          <Card card={card}>
            <div className="relative h-[380px] w-[280px]">
              <Card.Image />
            </div>
            <Card.Title />
            <div className="flex items-center gap-3.5 text-base text-tertiary my-3.5">
              <Smile className="h-5 w-5" />
              <Card.Designation />
            </div>
            <Card.Paragraph className="my-1 max-w-[280px] leading-loose" />

            <button className="mt-5 text-base text-tertiary font-bold cursor-pointer hover:bg-black hover:text-white transition-colors duration-300 rounded-4xl h-16.5 w-45 bg-[#FEC415]">
              Sponsor
            </button>
          </Card>
        </div>
      ))}
    </section>
  );
}
