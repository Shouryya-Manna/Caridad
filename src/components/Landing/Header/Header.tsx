"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";
import SheetStyle from "./Components/SheetStyle";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { HeaderData } from "@/data/Header.data";

type HeaderProps = { className?: string };

export default function Header({ className }: HeaderProps) {
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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <section
      className={cn(
        "sticky top-0 z-50 bg-white transition-transform duration-300 ease-in-out py-1",
        hidden ? "-translate-y-full" : "translate-y-0",
        className,
      )}
    >
      <div className="max-w-[1239px] mx-auto grid grid-cols-[1fr_2fr_1fr] h-30 px-1">
        {/* Logo */}
        <div className="relative flex max-w-90 w-28 h-20 justify-start items-center cursor-pointer">
          <Image
            src="/Furrfolks_Logo.png"
            alt=""
            fill
            className="object-fill mt-2"
          />
        </div>

        {/* Navigation */}
        <div className="w-full flex justify-between items-center px-10 gap-14.5">
          {HeaderData.map((item, index) => (
            <div key={index} className="relative group">
              <div
                className={`cursor-pointer font-pt-sans font-medium text-nowrap text-[16px] tracking-[0.1]
                          ${
                            index === 0
                              ? "underline underline-offset-4"
                              : "group-hover:underline underline-offset-4 ml-0"
                          }
                                    
                           ${index < 1 ? "pl-6.5" : ""}`}
              >
                <Link
                  href={
                    item.menu === "Home"
                      ? "/"
                      : `/${item.menu.toLowerCase().replace(/\s+/g, "-")}`
                  }
                  className="font-pt-sans font-semibold"
                >
                  {item.menu}
                </Link>
              </div>

              {/* Dropdown */}
              <div
                className="
                       absolute left-0 mt-2 z-50
                       bg-black w-fit text-white px-6 py-4
                       opacity-0 invisible group-hover:opacity-100 group-hover:visible
                       transition-all duration-200 whitespace-nowrap"
              >
                {item.submenu.map((sub, index) => (
                  <div
                    key={index}
                    className="py-2 hover:text-yellow-300 cursor-pointer font-pt-sans"
                  >
                    {sub}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="ml-auto flex gap-7 w-83 justify-end items-center mr-2">
          <SheetStyle />
          <Button
            className="bg-salmon cursor-pointer text-[16px] font-pt-sans font-bold hover:text-white text-white hover:bg-sea-serpent rounded-4xl h-12.5 w-33  focus-visible:ring-0 focus-visible:ring-offset-0"
            variant="outline"
          >
            Donate
          </Button>
        </div>
      </div>
    </section>
  );
}
