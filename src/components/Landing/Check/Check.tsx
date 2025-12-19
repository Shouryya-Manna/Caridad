"use client";

import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { useState } from "react";

export default function Check() {
  const [open, setOpen] = useState(false);

  return (
    <section className="my-20 mx-7">
      <div className="mx-auto flex max-w-[1239px] items-center justify-center gap-12 relative">
        <div className="flex-1 gap-14">
          <h2 className="absolute top-20 mx-0.5 z-20 text-[70px] font-extrabold leading-none text-black">
            <span className="block">
              Checked your
            </span>
            <span className="block">breasts</span>
            <span className="block">lately?</span>
          </h2>
          <p className="text-[16px] leading-[1.4] text-[#1D1C1C] mt-60 mx-0.5 border-b border-b-gray-600 py-9">
            We'll show you how. Checking your
            breasts is easy as TLC. 'Know your
            normal', so you can find any <br />
            changes in your breasts as soon as
            they appear.
          </p>
          <div className="flex gap-15 pt-11 max-w-xl px-1 justify-start items-center">
            <div>
              <p className="text-[16px] font-bold">
                01.
              </p>
              <p className="text-[16px] font-bold">
                Touch
              </p>
            </div>
            <div>
              <p className="text-[16px] font-bold">
                02.
              </p>
              <p className="text-[16px] font-bold">
                Look
              </p>
            </div>
            <div>
              <p className="text-[16px] font-bold">
                03.
              </p>
              <p className="text-[16px] font-bold">
                Check
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT VIDEO THUMB */}
        <div
          onClick={() => setOpen(true)}
          className="relative h-[592px] w-[865px] cursor-pointer overflow-hidden"
        >
          {/* play button */}
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <div className="group w-30 h-30 rounded-full bg-tertiary hover:bg-[#ffff] transition-colors flex items-center justify-center">
              <div className="w-6 h-6 border-l-20 border-l-white border-y-12 border-y-transparent group-hover:border-l-[#1D1C1C] transition-colors" />
            </div>
          </div>

          <Image
            src="/IMG10.jpg"
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
              className="absolute -top-10 right-0 hover:text-black text-white text-xl"
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
