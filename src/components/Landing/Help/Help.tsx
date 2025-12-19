import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { HelpData } from "@/data/Help.data";
import { Plus, X } from "lucide-react";

export default function Help() {
  return (
    <section className="mx-20 py-28 my-20">
      <div className="mx-auto flex flex-col max-w-[1239px] px-1 items-center justify-center gap-10 ">
        {/* Header */}
        <div className="text-center">
          <p className="mb-5 text-[20px] font-medium text-[#1D1C1C]">
            WHAT WE DO
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-18 mx-auto">
            How we help
          </h2>
        </div>

        {/* Accordion */}
        <Accordion
          type="single"
          collapsible
          className="w-full"
        >
          {HelpData.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item+${index}`}
              className="border-0"
            >
              <AccordionTrigger className="group cursor-pointer flex items-center justify-between py-10 text-left text-[24px] font-bold tracking-tight hover:no-underline">
                <span className="text-[#1D1C1C]">
                  {item.title}
                </span>
                <span className="ml-4 flex h-15 w-10 items-center justify-center">
                  <Plus
                    strokeWidth={0.5}
                    className="h-20 w-20 transition-all group-data-[state=open]:hidden text-[#52525b]"
                  />
                  <X
                    strokeWidth={0.5}
                    className="hidden h-20 w-20 transition-all group-data-[state=open]:block text-[#1D1C1C]"
                  />
                </span>
              </AccordionTrigger>

              <AccordionContent className="pb-1 text-base leading-loose duration-1000 ease-in-out text-[#1D1C1C]">
                {item.description}
              </AccordionContent>

              <Separator className="mb-5 mt-4" />
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
