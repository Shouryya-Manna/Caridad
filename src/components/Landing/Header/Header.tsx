"use client";
import { Button } from "@/components/ui/button";
import { HeaderData } from "@/data/Header.data";
import { Bars2Icon } from "@heroicons/react/16/solid";
import Image from "next/image";
import { useEffect, useState } from "react";

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
    bg-primary py-1 px-7
  `}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-[1fr_2fr_1fr] h-20 py-1">
        {/* Logo */}
        <div className="relative flex max-w-85 w-40 h-full justify-start items-center cursor-pointer">
          <Image
            src="/logo.svg"
            alt=""
            fill
            className="object-contain object-left"
          />
        </div>

        {/* Navigation */}
        <div className="w-full mx-auto flex justify-between items-center px-10">
          {HeaderData.map((item, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div
                className={`cursor-pointer px-4 font-medium mx-auto text-nowrap text-[16px] ${
                  index === 0
                    ? "underline underline-offset-4"
                    : "group-hover:underline underline-offset-4"
                }`}
              >
                {item.menu}
              </div>

              {/* Dropdown */}
              <div
                className="
                absolute left-0 mt-2 z-50
                bg-black w-fit text-white px-6 py-4
                opacity-0 invisible group-hover:opacity-100 group-hover:visible
                transition-all duration-200 whitespace-nowrap"
              >
                {item.submenu.map(
                  (sub, index) => (
                    <div
                      key={index}
                      className="py-2 hover:text-yellow-300 cursor-pointer"
                    >
                      {sub}
                    </div>
                  )
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="ml-auto flex gap-8 w-85 justify-end items-center">
          <Bars2Icon className="h-8 w-8 cursor-pointer my-3" />
          <Button
            className="bg-transparent cursor-pointer text-[16px] font-bold hover:bg-black hover:text-white rounded-4xl h-13 w-33 border border-black focus-visible:ring-0 focus-visible:ring-offset-0"
            variant="outline"
          >
            Donate
          </Button>
        </div>
      </div>
    </section>
  );
}
