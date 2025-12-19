import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Donation() {
  return (
    <section className="mx-auto max-w-[1239px] px-1 py-24 mt-8">
      <div className="mb-16 text-center">
        <p className="mb-3 text-[20px] font-[401] tracking-normal uppercase">
          Get Involved
        </p>
        <h2 className="text-[50px] font-bold mb-12 mx-auto">
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
        <div className="flex flex-col justify-center bg-[#FEC415] px-12 py-5">
          {[
            "Donate",
            "Contribute",
            "Volunteer",
          ].map((item, index) => (
            <div key={item} className="group">
              <div className="flex cursor-pointer items-center justify-start gap-[45px] py-10">
                <h3 className="flex items-center gap-6 text-[50px] font-extrabold text-tertiary relative">
                  {item}
                  <ArrowRight
                    className="w-20 h-10 text-tertiary font-extralight"
                    strokeWidth={1}
                  />
                  <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-tertiary transition-all duration-500 group-hover:w-full"></span>
                </h3>
              </div>
              {index !== 2 && (
                <Separator className="bg-tertiary" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
