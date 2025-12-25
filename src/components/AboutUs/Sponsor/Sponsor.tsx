"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import Sponsor2 from "../Sponsor2/Sponsor2";

export default function Sponsor() {
  const [selectedAmount, setSelectedAmount] =
    useState<string>("10.00");

  return (
    <section className="max-w-8xl mx-auto w-full px-7.5 bg-[#F8F9F3] py-40">
      <p className="mb-3 text-[20px] font-[401] tracking-normal uppercase text-tertiary">
        Donate Now
      </p>
      <h2 className="text-[50px] font-bold text-tertiary">
        Sponsor our work
      </h2>
      <div className="flex justify-between my-15">
        <span className="text-yellow-200">
          Raised: $0
        </span>
        <span className="text-[#7A8897]">
          Goal: $100,000
        </span>
      </div>
      <div className="flex items-center gap-10">
        <div className="flex">
          {[
            "10.00",
            "25.00",
            "50.00",
            "75.00",
          ].map((items, index) => (
            <div
              key={index}
              onClick={() =>
                setSelectedAmount(items)
              }
              className={`w-21 h-21 mx-5 my-4 rounded-full border-2 border-black flex items-center justify-center font-semibold text-base cursor-pointer transition-all duration-200 
                ${
                  selectedAmount === items
                    ? "bg-tertiary text-white"
                    : "bg-transparent text-tertiary"
                }
  `}
            >
              $ {items}
            </div>
          ))}
        </div>
        <div className="w-47 h-21 rounded-full border-2 gap-8 border-tertiary bg-transparent flex items-center px-6">
          <p className="font-semibold text-tertiary">
            $
          </p>
          <input
            type="text"
            value={selectedAmount}
            onChange={(e) =>
              setSelectedAmount(e.target.value)
            }
            className="outline-none text-tertiary bg-transparent font-semibold text-base"
          />
        </div>
        <Button className="cursor-pointer text-[16px] text-tertiary font-bold hover:bg-black hover:text-white rounded-4xl h-14 w-40 bg-[#FEC415]">
          Donate
        </Button>
      </div>
      <p className="uppercase text-tertiary text-xl font-semibold mt-4">
        or:
      </p>
      <h2 className="text-[50px] font-bold text-tertiary">
        Be the change for one child:
      </h2>
      <button className="mt-8 font-bold text-tertiary text-[16px] cursor-pointer underline underline-offset-9 text-left decoration-yellow-200">
        View all children
      </button>
    </section>
  );
}
