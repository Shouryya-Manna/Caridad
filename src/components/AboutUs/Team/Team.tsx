import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Team() {
  return (
    <section className="max-w-8xl mx-auto w-full grid grid-cols-3 px-7.5">
      <div className="relative h-[500px] w-[200px] pb-50 items-start flex">
        <Image
          src="/About-Us/Ab4.jpg"
          alt=""
          fill
          className="object-contain object-top-left"
        />
      </div>
      <div className="relative h-[500px] w-[200px] pb-50 items-start flex">
        <Image
          src="/About-Us/Ab5.jpg"
          alt=""
          fill
          className="object-contain object-center"
        />
      </div>
      <div>
        <p className="mb-3 text-[20px] font-[401] tracking-normal uppercase">
          Team
        </p>
        <h2 className="text-[50px] font-bold mb-12 mx-auto">
          Meet our leadership team
        </h2>
      </div>
      <Button className="text-[16px] underline my-6 text-tertiary underline-offset-9 decoration-yellow-200 cursor-pointer font-bold text-left">
        View children success stories
      </Button>
    </section>
  );
}
