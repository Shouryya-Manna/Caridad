"use client";
import { OurCausesData } from "@/data/OurCauses.data";
import Card from "../Global/Card/Card";
import { cn } from "@/lib/utils";
import RaisedAmount from "../Global/RaisedAmount";
import { ProtectDataFull } from "@/data/Protect.data";

export default function Protect() {
  return (
    <section className="max-w-8xl mx-auto w-full flex items-center justify-around px-7.5 py-30 gap-x-10">
      {ProtectDataFull.map((card, index) => (
        <div
          key={index}
          className={cn(
            "flex flex-col items-start",
            index === 1 && "mt-40"
          )}
        >
          <Card card={card}>
            <div
              className={cn(
                "relative h-[380px] w-[310px]"
              )}
            >
              <Card.Image />
            </div>

            <Card.Title />
            <Card.Paragraph className="max-w-[310px] my-5 leading-loose" />
            <RaisedAmount />
            <button className="text-base text-white font-bold cursor-pointer hover:bg-sea-serpent hover:text-white transition-colors duration-300 rounded-4xl h-16.5 w-45 bg-salmon">
              Sponsor
            </button>
          </Card>
        </div>
      ))}
    </section>
  );
}
