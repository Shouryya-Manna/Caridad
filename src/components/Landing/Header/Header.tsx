import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HeaderData } from "@/data/Header.data";
import { Bars2Icon } from "@heroicons/react/16/solid";

export default function Header() {
  return (
    <div className="flex justify-between items-center bg-[#FFFDD0] px-30 py-5">
      <div>caridad</div>

      <div className="flex gap-10">
        {HeaderData.map((item, index) => (
          <div className="cursor-pointer  hover:underline">
            <DropdownMenu>
              <DropdownMenuTrigger>
                {item}
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ))}
      </div>

      <div className="flex  gap-10">
        <Bars2Icon className="h-8 w-8" />
        <Button
          className="cursor-pointer hover:bg-black hover:text-white rounded-4xl h-14 w-32"
          variant="outline"
        >
          Donate
        </Button>
      </div>
    </div>
  );
}
