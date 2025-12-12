import { Button } from "@/components/ui/button";
import { HeaderData } from "@/data/Header.data";
import { Bars2Icon } from "@heroicons/react/16/solid";

export default function Header() {
  return (
    <div className="flex justify-between items-center bg-[#FFFDD0] px-30 py-5">
      {/* Logo */}
      <div>
        <img src="logo.png"></img>
      </div>

      {/* Navigation */}
      <div className="flex gap-5">
        {HeaderData.map((item, index) => (
          <div
            key={index}
            className="relative group"
          >
            <div className="cursor-pointer px-2 py-1 group-hover:underline underline-offset-4 text-xl">
              {item.menu}
            </div>

            {/* Dropdown */}
            <div
              className="
            absolute left-0 mt-1 bg-black w-fit text-white px-6 py-4
            opacity-0 invisible group-hover:opacity-100 group-hover:visible
            transition-all duration-200 whitespace-nowrap
"
            >
              {item.submenu.map((sub, index) => (
                <div
                  key={index}
                  className="py-2 hover:text-yellow-300 cursor-pointer"
                >
                  {sub}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-10">
        <Bars2Icon className="h-8 w-8 cursor-pointer" />
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
