import Image from "next/image";
import UnderlinedText from "../Global/UnderlinedText";

export default function Change() {
  return (
    <section className="max-w-8xl mx-auto w-full">
      <div className="relative h-[800px] w-full py-40">
        <Image
          src="/What-We-Do/Wwd06.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute z-10 px-7.5 top-190 text-[70px] font-bold leading-none text-tertiary space-y-3">
          <span className="block bg-[#F8F9F3] w-fit px-5">
            Be the change
          </span>
          <span className="block bg-[#F8F9F3] w-fit px-5">
            for one child:
          </span>
        </div>
      </div>

      <div className="mt-30 mb-20 max-w-5xl px-7.5 flex flex-col justify-start leading-[1.7]">
        <UnderlinedText
          text="View children success stories"
          className="my-8"
        />
      </div>
    </section>
  );
}
