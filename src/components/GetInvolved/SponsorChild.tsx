import { Smile } from "lucide-react";
import Image from "next/image";

export default function SponsorChild() {
  return (
    <section className="max-w-8xl mx-auto w-full grid grid-cols-3 px-7.5 py-30 bg-[#F8F9F3]">
      <div className="flex flex-col items-start">
        <div className="flex flex-col items-start">
          <div className="relative h-[355px] w-[275px] mb-6">
            <Image
              src="/About-Us/Ab7.jpg"
              alt=""
              fill
              className="object-cover"
            />
          </div>

          <h3 className="text-2xl font-bold mb-3.5 text-tertiary">
            Isaiah
          </h3>

          <div className="flex items-center gap-2.5 text-base text-tertiary mb-5">
            <Smile className="h-5 w-5" />
            <span>12 Years</span>
          </div>

          <p className="text-base leading-relaxed text-tertiary mb-7.5 min-h-20 max-w-2xs">
            Hello, my name is Isaiah and I am 12
            years old and I want to be a doctor
            when I grow up.
          </p>

          <button className="text-[16px] text-tertiary font-bold cursor-pointer hover:bg-black hover:text-white transition-colors duration-300 rounded-4xl h-16.5 w-45 bg-[#FEC415]">
            Sponsor
          </button>
        </div>
      </div>

      <div className="flex flex-col items-start justify-center mt-30">
        <div className="relative h-[355px] w-[275px] mb-6">
          <Image
            src="/About-Us/Ab8.jpg"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        <h3 className="text-2xl font-bold mb-3.5 text-tertiary">
          Samahtna
        </h3>

        <div className="flex items-center gap-2.5 text-base text-tertiary mb-5">
          <Smile className="h-5 w-5" />
          <span>6 Years</span>
        </div>

        <p className="text-base leading-relaxed text-tertiary mb-7.5 min-h-20 max-w-2xs">
          Hello, my name is Samahtna and I am 6
          years old and I want to be a ballet
          dancer when I grow up.
        </p>

        <button className="text-[16px] text-tertiary font-bold cursor-pointer hover:bg-black hover:text-white transition-colors duration-300 rounded-4xl h-16.5 w-45 bg-[#FEC415]">
          Sponsor
        </button>
      </div>

      <div className="flex flex-col justify-center ">
        <p className="mb-3 text-[20px] font-[401] uppercase">
          02
        </p>
        <h2 className="text-[50px] font-bold mb-10 leading-tight">
          Sponsor a child today
        </h2>
        <p className="text-base mb-5 leading-relaxed text-tertiary  min-h-20 max-w-sm">
          Meet some of our amazing children who
          are waiting for sponsorship.
        </p>
        <button className="font-bold text-tertiary text-[16px] cursor-pointer underline underline-offset-9 text-left decoration-yellow-200">
          View all children
        </button>
      </div>
    </section>
  );
}
