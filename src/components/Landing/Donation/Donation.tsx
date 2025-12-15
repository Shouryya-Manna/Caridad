import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Donation() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-16 text-center">
        <p className="mb-4 text-sm font-semibold tracking-widest">
          GET INVOLVED
        </p>
        <h2 className="text-3xl font-bold md:text-4xl">
          Want to Help
        </h2>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 overflow-hidden md:grid-cols-2 gap-10">
        {/* Image */}
        <div className="relative h-[520px] md:h-[600px]">
          <Image
            src="/Woman3.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        {/* Actions */}
        <div className="flex flex-col justify-center bg-amber-500 px-12 py-16">
          {[
            "Donate",
            "Contribute",
            "Volunteer",
          ].map((item, index) => (
            <div key={item} className="group">
              <div className="flex cursor-pointer items-center justify-between py-10">
                <h3 className="text-3xl font-semibold text-black">
                  {item}
                </h3>
                <ArrowRight className="h-7 w-17 text-black" />
              </div>
              {index !== 2 && (
                <Separator className="bg-black/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
