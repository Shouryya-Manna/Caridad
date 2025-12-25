import { Sponsor2Data } from "@/data/Sponsor2.data";
import { Smile } from "lucide-react";
import Image from "next/image";

export default function Sponsor2() {
  return (
    <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-35 px-18 max-w-8xl w-full">
      {Sponsor2Data.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-start"
        >
          <div className="relative aspect-4/5 w-full mb-6">
            <Image
              src={item.image}
              alt=""
              fill
              className="object-cover"
            />
          </div>

          <h3 className="text-2xl font-bold mb-3.5 text-tertiary">
            {item.name}
          </h3>

          <div className="flex items-center gap-2.5 text-base text-tertiary mb-5">
            <Smile className="h-5 w-5" />
            <span>{item.age}</span>
          </div>

          <p className="text-base leading-relaxed text-tertiary mb-7.5 min-h-20">
            {item.about}
          </p>

          <button className="text-[16px] text-tertiary font-bold cursor-pointer hover:bg-black hover:text-white transition-colors duration-300 rounded-4xl h-16.5 w-45 bg-[#FEC415]">
            Sponsor
          </button>
        </div>
      ))}
    </section>
  );
}
