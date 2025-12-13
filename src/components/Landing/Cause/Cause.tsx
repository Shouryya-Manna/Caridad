import { Button } from "@/components/ui/button";
import React from "react";

export default function Cause() {
  return (
    <div className="bg-primary items-center flex flex-col">
      <div>CAUSE</div>

      <div className="flex items-center justify-center">
        {/* Image */}
        <div>
          <img src="/Woman2.png"></img>

          {/* Floating text */}
          <span className="">
            Support groundebreaking research to
            help others
          </span>
        </div>

        {/* Paragraph div */}
        <div>
          <p>
            So many younger women are being
            diagnosed with breast cancer and are
            dying needlessly. It's critical that
            research is undertaken in this area
            now to help save their lives.
          </p>
          <Button className="cursor-pointer text-black font-bold hover:bg-black hover:text-white rounded-4xl h-14 w-32 bg-yellow-500">
            Donate
          </Button>
        </div>
      </div>
    </div>
  );
}
