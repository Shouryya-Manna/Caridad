import Image from "next/image";
import React from "react";
import DynamicHeader from "../Global/Header/DynamicHeader";
import Header from "../Landing/Header/Header";

export default function AHeader() {
  return (
    <section className="max-w-8xl mx-auto w-full">
      <div>
        <DynamicHeader className="bg-transparent py-0" />
        <div className="relative h-[400px] w-full py-40">
          <Image
            src="/About-Us/AboutHeader.jpg"
            alt=""
            fill
            className="object-cover"
          />

          <div className="absolute z-10 px-7.5 top-190 text-[70px] font-bold leading-none text-tertiary space-y-3">
            <span className="block bg-[#F8F9F3] w-fit px-5">
              Be the change
            </span>
            <span className="block bg-[#F8F9F3] w-fit px-5">
              for one child:
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
