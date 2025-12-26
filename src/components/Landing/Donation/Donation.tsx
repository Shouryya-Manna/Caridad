import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function Donation() {
  return (
    <section className="mx-auto max-w-[1239px] px-1 py-24 mt-5">
      <div className="mb-16 text-center">
        <p className="mb-3 text-[20px] font-[401] tracking-normal uppercase">
          Get Involved
        </p>
        <h2 className="text-[50px] font-bold mb-12 mx-auto">
          Want to Help
        </h2>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 overflow-hidden md:grid-cols-2 gap-7.5">
        {/* Image */}
        <div className="relative h-[650px]">
          <Image
            src="/Landing-Page/IMG10.jpg"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        {/* Actions Container */}
        <div className="flex flex-col justify-center bg-[#FEC415] px-12 py-6">
          {[
            "Donate",
            "Contribute",
            "Volunteer",
          ].map((item, index) => (
            <div
              key={item}
              className="group w-full pb-4"
            >
              <div className="flex cursor-pointer items-center justify-between py-10">
                <h3 className="flex items-center gap-6 text-[50px] font-extrabold text-black relative">
                  {item}
                  <Image
                    src="/Arrow.svg"
                    alt=""
                    fill
                    className="w-10 h-8 text-black"
                  />
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-black transition-all duration-500 group-hover:w-full"></span>
                </h3>
              </div>

              {index !== 2 && (
                <Separator className="bg-tertiary my-2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
