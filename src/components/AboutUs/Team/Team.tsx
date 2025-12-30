import UnderlinedText from "@/components/Global/UnderlinedText";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Team() {
  return (
    <section className="max-w-8xl mx-auto w-full grid grid-cols-3 px-7.5 mt-30 py-30 gap-x-20">
      <div className="flex flex-col items-start">
        <div className="relative h-[330px] w-[280px]">
          <Image
            src="/About-Us/Ab4.jpg"
            alt=""
            fill
            className="object-cover object-top"
          />
        </div>

        <h3 className="mt-6 text-2xl font-bold">
          Isabelle McKenzie
        </h3>
        <p className="text-base text-tertiary mt-1">
          CEO & President
        </p>
        <p className="text-base mt-4 max-w-[260px] leading-relaxed">
          “I love the kids we serve and when love
          is the motivation, there is nothing that
          can't be achieved.”
        </p>
      </div>
      <div className="flex flex-col items-start justify-center">
        <div className="relative h-[330px] w-[280px]">
          <Image
            src="/About-Us/Ab5.jpg"
            alt=""
            fill
            className="object-cover object-center"
          />
        </div>

        <h3 className="mt-6 text-2xl font-bold">
          Jeremy Newman
        </h3>
        <p className="text-base text-tertiary mt-1">
          Chief Operating Officer
        </p>
        <p className="text-base mt-4 max-w-[260px] leading-relaxed">
          “To be of benefit to all children who
          need support is the greatest goal in my
          life.”
        </p>
      </div>
      <div className="flex flex-col justify-center py-60">
        <p className="mb-3 text-[20px] font-[401] uppercase">
          Team
        </p>
        <h2 className="text-[50px] font-bold mb-10 leading-tight">
          Meet our leadership team
        </h2>

        <UnderlinedText
          text="Get Involved"
          className="my-8 mx-0"
        />
      </div>
    </section>
  );
}
