import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
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
        <SheetContent className="py-7 px-6 w-full sm:max-w-[433px]">
          <SheetHeader>
            {[
              "Causes",
              "Events",
              "Stories",
              "Membership & Giving",
              "Gifts in Kind",
            ].map((item, index) => (
              <div className="px-5 p-5 font-bold text-[24px] text-tertiary">
                <a href="#" key={index}>
                  {item}
                </a>
              </div>
            ))}
          </SheetHeader>

          <Button className="mx-5 cursor-pointer text-[16px] text-tertiary font-bold hover:bg-black hover:text-white rounded-4xl h-14 w-40 bg-[#FEC415]">
            Donate
          </Button>

          <div className="flex items-center px-5 gap-13">
            {/* facebook */}
            <svg
              className="group cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 320 512"
            >
              <circle
                className="transition-all duration-300 ease-in-out group-hover:fill-[#FEC415]"
                cx="160"
                cy="256"
                r="250"
                fill="#1a1a1a"
              />
              <path
                fill="white"
                transform="translate(160, 295) scale(0.75) translate(-160, -256)"
                d="M80 299.3l0 212.7 116 0 0-212.7 86.5 0 18-97.8-104.5 0 0-34.6c0-51.7 20.3-71.5 72.7-71.5 16.3 0 29.4 .4 37 1.2l0-88.7C291.4 4 256.4 0 236.2 0 129.3 0 80 50.5 80 159.4l0 42.1-66 0 0 97.8 66 0z"
              />
            </svg>
            {/* Twitter */}
            <svg
              className="group cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 512 512"
            >
              <path
                className="transition-all duration-300 ease-in-out group-hover:fill-[#FEC415]"
                fill="#1a1a1a"
                transform="translate(256, 256) scale(0.75) translate(-256, -256)"
                d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103l0-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"
              />
            </svg>
            {/* Instagram */}
            <svg
              className="group cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 448 512"
            >
              <path
                className="transition-all duration-300 ease-in-out group-hover:fill-[#FEC415]"
                fill="#1a1a1a"
                transform="translate(224, 256) scale(0.75) translate(-224, -256)"
                d="M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
              />
            </svg>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
