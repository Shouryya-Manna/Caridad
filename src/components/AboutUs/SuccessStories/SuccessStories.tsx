import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function SuccessStories() {
  return (
    <section className="max-w-8xl mx-auto w-full">
      <div className="relative h-[800px] w-full py-40">
        <Image
          src="/About-Us/Ab3.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute z-10 px-7.5 top-190 text-[70px] font-bold leading-none text-tertiary space-y-3">
          <span className="block bg-[#F8F9F3] w-fit px-5">
            We are doing
          </span>
          <span className="block bg-[#F8F9F3] w-fit px-5">
            the right thing,
          </span>
          <span className="block bg-[#F8F9F3] w-fit px-5">
            at the right time
          </span>
        </div>
      </div>

      <div className="py-20 my-50 max-w-5xl px-7.5 flex flex-col justify-start leading-[1.7]">
        <p className="text-[16px] text-tertiary mb-4">
          Like the world-changers who support our
          organization, we are focused on making a
          long-term impact by helping kids living
          in poverty. We have a bold vision:
          graduating healthy, educated, empowered
          and employed young adults from our
          program.
        </p>
        <p className="text-[16px] text-tertiary mb-4">
          The students supported by our programs
          face major barriers to accessing
          education; many are orphaned, living in
          extreme poverty or dealing with other
          difficult family circumstances.
        </p>
        <Button className="text-[16px] underline my-6 text-tertiary underline-offset-9 decoration-yellow-200 cursor-pointer font-bold text-left">
          View children success stories
        </Button>
      </div>
    </section>
  );
}
