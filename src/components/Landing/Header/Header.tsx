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
    bg-primary
    flex justify-center items-center py-5 gap-60
  `}
    >
      {/* Logo */}
      <div className="relative h-[50px] w-[200px] shrink-0">
        <Image
          src="/logo.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      {/* Navigation */}
      <nav className="flex gap-5">
        {HeaderData.map((item, index) => (
          <div
            key={index}
            className="relative group"
          >
            <div className="cursor-pointer px-2 py-1 group-hover:underline underline-offset-4 text-xl">
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
              {item.submenu.map((sub, index) => (
                <div
                  key={index}
                  className="py-2 hover:text-yellow-300 cursor-pointer"
                >
                  {sub}
                </div>
              ))}
            </div>
          </div>
        ))}
      </nav>

      {/* Buttons */}
      <div className="flex gap-10">
        <Bars2Icon className="h-8 w-8 cursor-pointer my-3" />
        <Button
          className="bg-transparent cursor-pointer font-bold hover:bg-black hover:text-white rounded-4xl h-14 w-32 border-black"
          variant="outline"
        >
          Donate
        </Button>
      </div>
    </section>
  );
}
