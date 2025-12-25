import Image from "next/image";
import React from "react";

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

        <button className="my-8 font-bold text-tertiary text-[16px] cursor-pointer underline underline-offset-9 text-left decoration-yellow-200">
          View all causes{" "}
        </button>
      </div>

      <div className="flex flex-col items-start justify-center">
        <div className="relative h-[380px] w-[290px]">
          <Image
            src="/About-Us/Ab9.webp"
            alt=""
            fill
            className="object-cover object-center"
          />
        </div>

        <h3 className="my-5 text-2xl font-bold">
          Protecting Children
        </h3>

        <p className="text-base my-2.5 max-w-[260px] leading-relaxed">
          You believe, as we do, that every child
          deserves a future. Every last child.
        </p>
        <div className="flex justify-between">
          <span className="text-tertiary text-[14px]">
            Raised: $80,930
          </span>
          <span className="text-tertiary text-[14px]">
            Goal: $85,000
          </span>
        </div>
      </div>

      <div className="flex flex-col items-start">
        <div className="relative h-[380px] w-[290px]">
          <Image
            src="/About-Us/Ab10.webp"
            alt=""
            fill
            className="object-cover object-top"
          />
        </div>

        <h3 className="mt-6 text-2xl font-bold">
          Empower Young People
        </h3>

        <p className="text-base mt-4 max-w-lg leading-relaxed">
          Is about the power of a generation in
          movement, it is about a strong voice
          being heard about hope and care; side by
          side with youth!
        </p>
      </div>
    </section>
  );
}
