import Image from "next/image";
import UnderlinedText from "../Global/UnderlinedText";

export default function Section04() {
  return (
    <section className="max-w-8xl mx-auto w-full px-7.5 mb-40">
      <div className="flex gap-20 items-start">
        <div className="max-w-[690px] w-full flex flex-col gap-30">
          <div className="relative w-full h-[380px]">
            <Image
              src="/What-We-Do/Wwd04.webp"
              alt=""
              fill
              className="object-cover"
            />
          </div>

          <p className="max-w-[520px] text-base leading-relaxed text-tertiary">
            The students supported by our programs
            face major barriers to
            <span className="font-bold">
              {" "}
              accessing education
            </span>
            ; many are orphaned, living in extreme
            poverty or dealing with other
            difficult family circumstances.
            <UnderlinedText
              text="View all children"
              className="my-8 mx-0"
            />
          </p>
        </div>
        <div className="flex flex-col justify-center lg:mt-100 px-10">
          <h2 className="mb-6 text-tertiary text-xl font-medium">
            03
          </h2>

          <p
            className="text-tertiary font-bold leading-[1.15] 
                        text-5xl max-w-xs"
          >
            Empower young people
          </p>
        </div>
      </div>
    </section>
  );
}
