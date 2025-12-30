"use client";
import { Smile } from "lucide-react";
import UnderlinedText from "../Global/UnderlinedText";
import Card from "../Global/Card/Card";
import { SponsorChildData } from "@/data/SponsorChild.data";
import { cn } from "@/lib/utils";

export default function SponsorChild() {
  return (
    <section className="max-w-8xl mx-auto w-full grid grid-cols-3 px-7.5 py-30 bg-[#F8F9F3]">
      {SponsorChildData.map((card, index) => (
        <div
          key={index}
          className={cn(
            "flex flex-col items-start",
            index === 1 && "justify-center mt-30"
          )}
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

      <div className="flex flex-col justify-center ">
        <p className="mb-3 text-[20px] font-[401] uppercase">
          02
        </p>
        <h2 className="text-[50px] font-bold mb-10 leading-tight">
          Sponsor a child today
        </h2>
        <p className="text-base mb-5 leading-relaxed text-tertiary  min-h-20 max-w-sm">
          Meet some of our amazing children who
          are waiting for sponsorship.
        </p>
        <UnderlinedText
          text="View all children"
          className="my-8 mx-0"
        />
      </div>
    </section>
  );
}
