import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../../ui/sheet";
import { Bars2Icon } from "@heroicons/react/16/solid";

export default function SheetStyle() {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <Bars2Icon className="h-8 w-8 cursor-pointer my-3" />
        </SheetTrigger>
        <SheetContent className="px-7 py-12 w-full sm:max-w-md">
          <SheetHeader>
            {[
              "Causes",
              "Events",
              "Stories",
              "Membership & Giving",
              "Gifts in Kind",
            ].map((item, index) => (
              <div className="px-5 pb-5 font-bold text-[24px] text-tertiary">
                <a href="#" key={index}>
                  {item}
                </a>
              </div>
            ))}
          </SheetHeader>

          <Button className="my-5 mx-5 cursor-pointer text-[16px] text-tertiary font-bold hover:bg-black hover:text-white rounded-4xl h-14 w-40 bg-[#FEC415]">
            Donate
          </Button>
        </SheetContent>
      </Sheet>
    </div>
  );
}
