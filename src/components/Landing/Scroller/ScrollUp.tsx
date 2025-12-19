"use client";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
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
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button
      onClick={scrollToTop}
      className={`
        fixed bottom-2 right-2 z-60
        p-2 bg-transparent
        transition-all duration-300 ease-in-out cursor-pointer
        ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "hover:opacity-0 translate-y-10 pointer-events-none"
        }

      `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="27"
        height="30"
        viewBox="0 0 32 32"
      >
        <path d="M15.098 8.344L.678 21.164C.081 21.694 0 22.645.5 23.279c.499.638 1.385.725 1.983.193l13.518-12.018 13.516 12.02c.6.53 1.486.445 1.985-.193s.419-1.585-.178-2.115L16.906 8.345c-.263-.234-.584-.351-.905-.351s-.641.118-.902.35z"></path>
      </svg>
    </Button>
  );
}
