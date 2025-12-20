import {
  Sheet,
  SheetContent,
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
        <SheetContent></SheetContent>
      </Sheet>
    </div>
  );
}
