import UnderlinedText from "@/components/Global/UnderlinedText";
import Image from "next/image";

export default function Mission() {
  return (
    <section className="bg-primary px-7">
      <div className="mx-auto flex max-w-[1239px] pr-1 pl-0.5 items-center justify-center gap-8">
        <div className="max-w-xl">
          {/* "Floating" looking text */}
          <p className="text-xl font-medium uppercase">
            Our Mission Is Simple
          </p>
          <div className="text-[120px] font-extrabold leading-[0.9] text-tertiary mt-8">
            <span className="block tracking-normal">
              Stop
            </span>
            <span className="block">deaths</span>
            <span className="block">from</span>
            <span className="block">breast</span>
            <span className="block">cancer</span>
          </div>
          <UnderlinedText
            text="Learn more"
            className="my-8"
          />
        </div>

        {/* Image div */}
        <div className="relative h-[890px] w-[907px] pl-1">
          <Image
            src="/Landing-Page/IMG1.webp"
            alt=""
            fill
            className="object-cover object-[15%] mt-50"
          />
        </div>
      </div>
    </section>
  );
}
