import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { EventData } from "@/data/Events.data";
import { MapPin } from "lucide-react";

export default function Events() {
  return (
    <section className="bg-[#F8F9F3] py-20">
      <div className="mx-auto max-w-[1239px] px-2 pb-10">
        <div className="mx-auto flex max-w-9xl items-center flex-col justify-center relative my-10">
          <p className="mb-3 text-[20px] font-[401] tracking-normal uppercase">
            Events
          </p>
          <h2 className="text-[50px] font-bold mb-16 mx-auto">
            Upcoming events
          </h2>
        </div>

        <Separator className="bg-gray-500" />
        {/* Events List */}
        <div className="">
          <div className="flex items-center justify-between py-8 p-10">
            <div className="flex items-center gap-6">
              <div className="flex h-24 w-24 flex-col items-center justify-center rounded-full bg-[#FEC415] text-[#1D1C1C]">
                <span className="text-[24px] font-bold leading-none">
                  08
                </span>
                <span className="text-[16px] font-medium uppercase">
                  Mar
                </span>
              </div>

              {/* Title */}
              <h3 className="text-[24px] font-bold text-[#1D1C1C] hover:text-yellow-400 transition-colors duration-200 cursor-pointer">
                Big Pink Jump March
              </h3>
            </div>

            {/* Time & Location */}
            <div className="flex items-center gap-10 text-sm text-gray-700">
              <span>8:00 am</span>
              <span className="flex items-center gap-2">
                <MapPin />
                New York
              </span>
            </div>
          </div>
          <Separator className="bg-gray-500" />

          <div className="flex items-center justify-between py-8 p-10">
            <div className="flex items-center gap-6">
              <div className="flex h-24 w-24 flex-col items-center justify-center rounded-full bg-[#FEC415] text-[#1D1C1C]">
                <span className="text-[24px] font-bold leading-none">
                  16
                </span>
                <span className="text-[16px] font-medium uppercase">
                  Mar
                </span>
              </div>

              <h3 className="text-[24px] font-bold text-[#1D1C1C] hover:text-yellow-400 transition-colors duration-200 cursor-pointer">
                Younger Women Together Online
              </h3>
            </div>

            <div className="flex items-center gap-10 text-sm text-gray-700">
              <span>18:00 pm</span>
              <span className="flex items-center gap-2">
                <MapPin />
                Online
              </span>
            </div>
          </div>
          <Separator className="bg-gray-500" />

          <div className="flex items-center justify-between py-8 p-10">
            <div className="flex items-center gap-6">
              <div className="flex h-24 w-24 flex-col items-center justify-center rounded-full bg-[#FEC415] text-[#1D1C1C]">
                <span className="text-[24px] font-bold leading-none">
                  21
                </span>
                <span className="text-[16px] font-medium uppercase">
                  Mar
                </span>
              </div>

              <h3 className="text-[24px] font-bold text-[#1D1C1C] hover:text-yellow-400 transition-colors duration-200 cursor-pointer">
                Women V Cancer - Ride the Night
              </h3>
            </div>

            <div className="flex items-center gap-10 text-sm text-gray-700">
              <span>10:00 am</span>
              <span className="flex items-center gap-2">
                <MapPin />
                New York
              </span>
            </div>
          </div>
          <Separator className="bg-gray-500" />
        </div>

        {/* Footer link */}
        <div className="mt-10 text-center">
          <Button className="text-sm font-semibold text-gray-900 cursor-pointer">
            View all events
          </Button>
        </div>
      </div>
    </section>
  );
}
