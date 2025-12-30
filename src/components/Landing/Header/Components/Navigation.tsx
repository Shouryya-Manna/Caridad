"use client";
import { HeaderData } from "@/data/Header.data";
import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isActive, setIsActive] = useState("");
  return (
    <div className="w-full flex justify-between items-center px-10 gap-14.5">
      {HeaderData.map((item, index) => (
        <div
          key={index}
          className="relative group"
        >
          <div
            className={`cursor-pointer font-[501] text-nowrap text-[16px] tracking-[0.1]
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
                  : `/${item.menu
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`
              }
              className="font-semibold"
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
                className="py-2 hover:text-yellow-300 cursor-pointer"
              >
                {sub}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
