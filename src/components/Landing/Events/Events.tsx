import { Button } from "@/components/ui/button";
import { EventData } from "@/data/Events.data";
import { MapPin } from "lucide-react";

export default function Events() {
  return (
    <section className="bg-primary mx-20 my-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto flex max-w-9xl items-center flex-col justify-center relative my-10">
          <p className="text-sm font-semibold tracking-widest my-10">
            EVENTS
          </p>
          <h2 className="text-4xl font-extrabold text-gray-900">
            Upcoming events
          </h2>
        </div>

        {/* Events List */}
        <div className="divide-y divide-gray-300 border-t border-b border-gray-300">
          {EventData.map((event, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-8"
            >
              {/* Date */}
              <div className="flex items-center gap-6">
                <div className="flex h-16 w-16 flex-col items-center justify-center rounded-full bg-yellow-400 text-gray-900">
                  <span className="text-xl font-bold leading-none">
                    {event.date}
                  </span>
                  <span className="text-xs font-medium uppercase">
                    {event.month}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 hover:text-yellow-400 cursor-pointer">
                  {event.title}
                </h3>
              </div>

              {/* Time & Location */}
              <div className="flex items-center gap-10 text-sm text-gray-700">
                <span>{event.time}</span>
                <span className="flex items-center gap-2">
                  <MapPin />S{event.location}
                </span>
              </div>
            </div>
          ))}
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
