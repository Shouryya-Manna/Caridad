import { Separator } from "@/components/ui/separator";
import { HelpData } from "@/data/Help.data";
import { Plus } from "lucide-react";
import React from "react";

export default function Help() {
  return (
    <div className="flex items-center flex-col my-10 mx-10">
      <div>WHAT WE DO</div>
      <div>How we help</div>
      <div>
        {HelpData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col"
          >
            <div className="flex justify-between">
              {item.title}
              <span>
                <Plus />
              </span>
            </div>
            <p>{item.description}</p>
            <Separator />
          </div>
        ))}
      </div>
    </div>
  );
}
