"use client";

import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { useState } from "react";

export default function Check() {
  const [open, setOpen] = useState(false);

  return (
    <section className="mx-20 my-20">
      <div className="mx-auto flex lg:max-w-[1239px] px-1 items-center justify-center gap-12 relative">
        <div className="flex-1">
          <h2 className="absolute top-10 z-20 text-7xl font-extrabold leading-[1.05] text-black">
            <span className="block">
              Checked your
            </span>
            <span className="block">
              breasts lately?
            </span>
          </h2>
          <div>
            <p className="max-w-l text-base leading-relaxed text-gray-600 mt-40">
              We'll show you how. Checking your
              breasts is easy as TLC. 'Know your
              normal', so you can find any changes
              in your breasts as soon as they
              adivpear.
            </p>
          </div>
          <Separator className="my-10 bg-gray-500" />
          <div className="flex items-center gap-10">
            <div>
              <p className="text-sm font-bold">
                01.
              </p>
              <p className="text-sm">Touch</p>
            </div>
            <div>
              <p className="text-sm font-bold">
                02.
              </p>
              <p className="text-sm">Look</p>
            </div>
            <div>
              <p className="text-sm font-bold">
                03.
              </p>
              <p className="text-sm">Check</p>
            </div>
          </div>
        </div>

        {/* RIGHT VIDEO THUMB */}
        <div
          onClick={() => setOpen(true)}
          className="relative h-[540px] w-[900px] cursor-pointer overflow-hidden"
        >
          {/* play button */}
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <div className="w-30 h-30 rounded-full bg-black/80 group-hover:bg-black transition-colors flex items-center justify-center">
              <div className="w-0 h-0 border-l-20 border-l-white border-y-12 border-y-transparent ml-1" />
            </div>
          </div>

          <Image
            src="/Woman4.jpeg"
            alt=""
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* VIDEO */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <div className="relative w-full max-w-6xl aspect-video">
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-10 right-0 text-white text-xl"
            >
              ✕
            </button>
            <iframe
              className="w-full h-full rounded-xl"
              src="https://www.youtube.com/embed/lvOp16CbWwg?autoplay=1"
              title="Breast Check Video"
            />
          </div>
        </div>
      )}
    </section>
  );
}
