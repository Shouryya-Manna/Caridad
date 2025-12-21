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
    <section className="mx-20 py-28 mt-20">
      <div className="mx-auto flex flex-col max-w-[1239px] px-1 items-center justify-center gap-10 ">
        {/* Header */}
        <div className="text-center">
          <p className="mb-5 text-[20px] font-medium text-tertiary">
            WHAT WE DO
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-18 mx-auto">
            How we help
          </h2>
        </div>

        {/* Accordion */}
        <Accordion
          type="multiple"
          className="w-full"
        >
          {HelpData.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item+${index}`}
              className="border-0"
            >
              <AccordionTrigger className="group cursor-pointer flex items-center justify-between py-10 text-left text-[24px] font-bold tracking-tight hover:no-underline">
                <span className="text-tertiary">
                  {item.title}
                </span>
                <span className="ml-4 flex h-15 w-10 items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23.4"
                    height="25"
                    viewBox="0 0 38 38"
                    className="transition-all group-data-[state=open]:hidden"
                  >
                    <path
                      d="M20,0 L20,18 L38,18 L38,19 L20,19 L20,38 L19,38 L19,19 L0,19 L0,18 L19,18 L19,0 L20,0 Z"
                      fill="#000000"
                      fillRule="evenodd"
                      strokeWidth={0.5}
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23.4"
                    height="25"
                    className="hidden transition-all group-data-[state=open]:block"
                  >
                    <path
                      d="M28.142 2.272L15.414 15l12.728 12.728-.707.707-12.728-12.728L1.272 29.142l-.707-.707L14 15 .565 1.565l.707-.707 13.435 13.435L27.435 1.565l.707.707z"
                      fill="#000"
                      fillRule="evenodd"
                      strokeWidth={0.5}
                    />
                  </svg>
                </span>
              </AccordionTrigger>

              <AccordionContent className="pb-1 text-base leading-loose duration-1000 ease-in-out text-tertiary">
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
