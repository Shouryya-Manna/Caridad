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
    <section className="mx-20 py-20 my-20">
      <div className="mx-auto flex flex-col max-w-[1239px] px-1 items-center justify-center gap-10 ">
        {/* Header */}
        <div className="text-center">
          <p className="mb-2 text-lg font-semibold tracking-widest">
            WHAT WE DO
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 mx-auto">
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
              <AccordionTrigger className="group cursor-pointer flex items-center justify-between py-10 text-left text-2xl font-bold tracking-tight hover:no-underline">
                <span>{item.title}</span>
                <span className="ml-4 flex h-8 w-8 items-center justify-center">
                  <Plus className="h-5 w-5 transition-all group-data-[state=open]:hidden text-gray-500" />
                  <X className="hidden h-5 w-5 transition-all group-data-[state=open]:block text-gray-500" />
                </span>
              </AccordionTrigger>

              <AccordionContent className="pb-10 pr-12 max-w-3xl text-base leading-relaxed text-muted-foreground">
                {item.description}
              </AccordionContent>

              <Separator />
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
