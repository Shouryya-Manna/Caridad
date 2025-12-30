"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";
import SheetStyle from "./Components/SheetStyle";
import Navigation from "./Components/Navigation";

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;

      if (currentPosition < lastScroll) {
        setHidden(false);
      } else if (currentPosition > 150) {
        setHidden(true);
      }

      setLastScroll(currentPosition);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );
    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, [lastScroll]);

  return (
    <section
      className={`
    sticky top-0 z-50
    transition-transform duration-300 ease-in-out
    ${
      hidden
        ? "-translate-y-full"
        : "translate-y-0"
    }
    bg-primary py-1
  `}
    >
      <div className="max-w-[1239px] mx-auto grid grid-cols-[1fr_2fr_1fr] h-20 px-1">
        {/* Logo */}
        <div className="relative flex max-w-90 w-41 h-20 justify-start items-center cursor-pointer">
          <Image
            src="/caridad.svg"
            alt=""
            fill
            className="object-fill"
          />
        </div>

        {/* Navigation */}
        <Navigation />

        {/* Buttons */}
        <div className="ml-auto flex gap-7 w-83 justify-end items-center mr-2">
          <SheetStyle />
          <Button
            className="bg-transparent cursor-pointer text-[16px] font-[650] hover:bg-black hover:text-white rounded-4xl h-12.5 w-33 border border-black focus-visible:ring-0 focus-visible:ring-offset-0"
            variant="outline"
          >
            Donate
          </Button>
        </div>
      </div>
    </section>
  );
}
