import { cn } from "@/lib/utils";
import React from "react";

type UnderlinedTextProps = {
  text: string;
  className?: string;
};

export default function UnderlinedText({
  text,
  className,
}: UnderlinedTextProps) {
  return (
    <span
      className={cn(
        "text-base underline  text-tertiary underline-offset-9 decoration-yellow-200 cursor-pointer font-pt-sans font-bold text-left mx-4 inline-block",
        className
      )}
    >
      {text}
    </span>
  );
}
