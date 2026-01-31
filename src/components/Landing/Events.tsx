import UnderlinedText from "@/components/Global/UnderlinedText";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { EventData } from "@/data/Events.data";
import { MapPin } from "lucide-react";

export default function Events() {
  return (
    <section className="bg-[#F8F9F3] py-20">
      <div className="mx-auto max-w-[1239px] px-2 pb-10">
        <div className="mx-auto flex max-w-9xl items-center flex-col justify-center relative my-10">
          <p className="mb-3 text-[20px] font-pt-sans font-normal tracking-normal uppercase">
            Events
          </p>
          <h2 className="text-[50px] font-ubuntu-condensed font-bold mb-16 mx-auto">
            Upcoming events
          </h2>
        </div>

        <Separator className="bg-gray-500" />
        {/* Events List */}
        <div className="">
          <div className="flex items-center justify-between py-8 px-8">
            <div className="flex items-center gap-13">
              <div className="flex h-23 w-23 flex-col items-center justify-center rounded-full bg-[#FEC415] text-tertiary">
                <span className="text-[24px] font-ubuntu-condensed font-bold leading-none">
                  08
                </span>
                <span className="text-[16px] font-pt-sans font-medium uppercase">
                  Mar
                </span>
              </div>

              {/* Title */}
              <h3 className="text-[24px] font-ubuntu-condensed font-bold text-tertiary hover:text-yellow-400 transition-colors duration-200 cursor-pointer">
                Big Pink Jump March
              </h3>
            </div>

            {/* Time & Location */}
            <div className="flex items-center gap-[30px] text-[16px] font-pt-sans text-gray-700">
              <span>8:00 am</span>
              <span className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="gray"
                  stroke="none"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                New York
              </span>
            </div>
          </div>
          <Separator className="bg-gray-500" />

          <div className="flex items-center justify-between py-8 p-10">
            <div className="flex items-center gap-13">
              <div className="flex h-23 w-23 flex-col items-center justify-center rounded-full bg-[#FEC415] text-tertiary">
                <span className="text-[24px] font-ubuntu-condensed font-bold leading-none">
                  16
                </span>
                <span className="text-[16px] font-pt-sans font-medium uppercase">
                  Mar
                </span>
              </div>

              <h3 className="text-[24px] font-ubuntu-condensed font-bold text-tertiary hover:text-yellow-400 transition-colors duration-200 cursor-pointer">
                Younger Women Together Online
              </h3>
            </div>

            <div className="flex items-center gap-[30px] text-[16px] font-pt-sans text-gray-700">
              <span>18:00 pm</span>
              <span className="flex items-center gap-2 text-[16px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="gray"
                  stroke="none"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                Online
              </span>
            </div>
          </div>
          <Separator className="bg-gray-500" />

          <div className="flex items-center justify-between py-8 p-10">
            <div className="flex items-center gap-13">
              <div className="flex h-23 w-23 flex-col items-center justify-center rounded-full bg-[#FEC415] text-tertiary">
                <span className="text-[24px] font-ubuntu-condensed font-bold leading-none">
                  21
                </span>
                <span className="text-[16px] font-pt-sans font-medium uppercase">
                  Mar
                </span>
              </div>

              <h3 className="text-[24px] font-ubuntu-condensed font-bold text-tertiary hover:text-yellow-400 transition-colors duration-200 cursor-pointer">
                Women V Cancer - Ride the Night
              </h3>
            </div>

            <div className="flex items-center gap-[30px] text-[16px] font-pt-sans text-gray-700">
              <span>10:00 am</span>
              <span className="flex items-center gap-2 text-[16px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="gray"
                  stroke="none"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                New York
              </span>
            </div>
          </div>
          <Separator className="bg-gray-500" />
        </div>

        {/* Footer link */}
        <div className="mt-10 text-center">
          <UnderlinedText text="View all events" />
        </div>
      </div>
    </section>
  );
}
