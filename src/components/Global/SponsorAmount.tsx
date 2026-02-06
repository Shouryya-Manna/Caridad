"use client";
import { useState } from "react";
import { Button } from "../ui/button";

export default function () {
  const [selectedAmount, setSelectedAmount] =
    useState<string>("10.00");
  return (
    <>
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
                    ? "bg-salmon text-white"
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
        <Button className="cursor-pointer text-[16px] text-white font-bold hover:bg-sea-serpent hover:text-white rounded-4xl h-14 w-40 bg-salmon">
          Donate
        </Button>
      </div>
    </>
  );
}
