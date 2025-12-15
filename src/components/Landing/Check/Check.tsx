"use client";

import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { useState } from "react";

export default function Check() {
  const [open, setOpen] = useState(false);

  return (
    <section className="mx-20 my-20">
      <div className="mx-auto flex max-w-9xl items-center justify-center relative">
        <div>
          <h2 className="absolute top-10 left-100 z-20 text-[44px] font-extrabold leading-[1.05] text-black">
            Checked your <br />
            breasts lately?
          </h2>

          <p className="max-w-xs text-xl leading-relaxed text-muted-foreground">
            We'll show you how. Checking your
            breasts is easy as TLC. Know your
            normal', so you can find any changes
            in your breasts as soon as they
            appear.
          </p>
          <Separator className="" />
          <div className="flex items-center gap-10 pt-6">
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
            alt="Breast check awareness video"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* VIDEO */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <div className="relative w-full max-w-4xl aspect-video">
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
