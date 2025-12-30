"use client";

import Card from "@/components/Global/Card/Card";
import UnderlinedText from "@/components/Global/UnderlinedText";
import { TeamCardData } from "@/data/Team.data";
import { cn } from "@/lib/utils";
import { Smile } from "lucide-react";

export default function Team() {
  return (
    <section className="max-w-8xl mx-auto w-full grid grid-cols-3 px-7.5 mt-30 py-30 gap-x-20">
      {TeamCardData.map((card, index) => (
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
                "relative max-h-[330px] h-full max-w-[280px] w-full"
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

      <div className="flex flex-col justify-center py-60">
        <p className="mb-3 text-[20px] font-[401] uppercase">
          Team
        </p>
        <h2 className="text-[50px] font-bold mb-10 leading-tight">
          Meet our leadership team
        </h2>

        <UnderlinedText
          text="Get Involved"
          className="my-8 mx-0"
        />
      </div>
    </section>
  );
}
