import Image from "next/image";
import DynamicHeader from "../Global/Header/DynamicHeader";

export default function AHeader() {
  return (
    <section className="relative w-full h-[400px]">
      {/* HEADER ON TOP */}
      <DynamicHeader className="absolute top-0 left-0 w-full z-50 bg-transparent" />

      {/* HERO IMAGE */}
      <Image
        src="/About-Us/AboutHeader.jpg"
        alt=""
        fill
        priority
        className="object-cover z-0"
      />

      {/* HERO TEXT */}
      <div className="absolute z-10 px-7.5 top-[290px] text-[70px] font-bold leading-none text-tertiary space-y-3">
        <span className="block bg-[#F8F9F3] w-fit px-5">
          Be the change
        </span>
        <span className="block bg-[#F8F9F3] w-fit px-5">
          for one child:
        </span>
      </div>
    </section>
  );
}
