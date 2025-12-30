"use client";

import Card from "@/components/Global/Card/Card";
import UnderlinedText from "@/components/Global/UnderlinedText";
import { OurCausesData } from "@/data/OurCauses.data";
import { cn } from "@/lib/utils";

export default function OurCauses() {
  return (
    <section className="max-w-8xl mx-auto w-full grid grid-cols-3 px-7.5 mt-30 py-30 gap-x-10">
      <div className="flex flex-col justify-center py-60">
        <p className="mb-3 text-[20px] font-[401] uppercase">
          Our causes
        </p>
        <h2 className="text-[50px] font-bold mb-10 leading-tight">
          We help more than 23k children every
          year
        </h2>

        <UnderlinedText
          text="View all children"
          className="my-8 mx-0"
        />
      </div>

      {OurCausesData.map((card, index) => (
        <div
          key={index}
          className={cn(
            "flex flex-col items-start",
            index === 0 && "justify-center"
          )}
        >
          <Card card={card}>
            <div
              className={cn(
                "relative max-h-[380px] h-full max-w-[300px] w-full"
              )}
            >
              <Card.Image />
            </div>

            <Card.Title />
            <Card.Paragraph className="max-w-[310px] my-5 leading-loose" />
            <button className="text-base text-tertiary font-bold cursor-pointer hover:bg-black hover:text-white transition-colors duration-300 rounded-4xl h-16.5 w-45 bg-[#FEC415]">
              Sponsor
            </button>
          </Card>
        </div>
      ))}
    </section>
  );
}
