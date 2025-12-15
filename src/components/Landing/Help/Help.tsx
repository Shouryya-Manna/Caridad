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
      <div className="mx-auto flex flex-col max-w-7xl items-center justify-center gap-10 ">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs font-semibold tracking-widest text-muted-foreground">
            WHAT WE DO
          </p>
          <h2 className="text-3xl font-bold md:text-4xl">
            How we help
          </h2>
        </div>

        {/* Accordion */}
        <Accordion
          type="single"
          collapsible
          className="w-full"
        >
          <Separator />
          {HelpData.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item+${index}`}
              className="border-0"
            >
              <AccordionTrigger className="group flex items-center justify-between py-6 text-left text-lg font-semibold hover:no-underline">
                <span>{item.title}</span>
                <span className="ml-4 flex h-8 w-8 items-center justify-center">
                  <Plus className="h-5 w-5 transition-all group-data-[state=open]:hidden" />
                  <X className="hidden h-5 w-5 transition-all group-data-[state=open]:block" />
                </span>
              </AccordionTrigger>

              <AccordionContent className="pb-6 text-sm leading-relaxed text-muted-foreground">
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
