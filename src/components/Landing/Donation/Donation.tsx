import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Donation() {
  return (
    <section className="mx-auto max-w-[1239px] px-1 py-24">
      <div className="mb-16 text-center">
        <p className="mb-4 text-lg font-semibold tracking-widest">
          GET INVOLVED
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mb-16 mx-auto">
          Want to Help
        </h2>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 overflow-hidden md:grid-cols-2 gap-7">
        {/* Image */}
        <div className="relative h-[600px] md:h-[700px]">
          <Image
            src="/IMG11.jpg"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        {/* Actions */}
        <div className="flex flex-col justify-center bg-[#FEC415] px-12 py-16">
          {[
            "Donate",
            "Contribute",
            "Volunteer",
          ].map((item, index) => (
            <div key={item} className="group">
              <div className="flex cursor-pointer items-center justify-start gap-6 py-10">
                <h3 className="flex items-center gap-6 text-[50px] font-extrabold text-tertiary">
                  {item}
                  <ArrowRight className="w-15 h-10 text-tertiary font-light" />
                </h3>
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
