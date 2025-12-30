"use client";
import Card from "@/components/Global/Card/Card";
import { Sponsor2Data } from "@/data/Sponsor2.data";
import { Smile } from "lucide-react";

export default function Sponsor2() {
  return (
    <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-35 px-18 max-w-8xl w-full">
      {Sponsor2Data.map((card, index) => (
        <div
          key={index}
          className="flex flex-col items-start"
        >
          <Card card={card}>
            <div className="relative h-[380px] w-[290px]">
              <Card.Image />
            </div>
            <Card.Title />
            <div className="flex items-center gap-3.5 text-base text-tertiary my-3.5">
              <Smile className="h-5 w-5" />
              <Card.Designation />
            </div>
            <Card.Paragraph className="my-1" />

            <button className="mt-5 text-base text-tertiary font-bold cursor-pointer hover:bg-black hover:text-white transition-colors duration-300 rounded-4xl h-16.5 w-45 bg-[#FEC415]">
              Sponsor
            </button>
          </Card>
        </div>
      ))}
    </section>
  );
}
