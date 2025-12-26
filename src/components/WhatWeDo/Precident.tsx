import Image from "next/image";
import React from "react";

export default function President() {
  return (
    <section className="max-w-8xl w-full px-7.5 py-40 mt-60 bg-[#F8F5EF]">
      <div className="flex flex-col items-center text-center gap-8">
        <div className="relative w-50 h-50 rounded-full overflow-hidden mb-5">
          <Image
            src="/What-We-Do/Wwd07.jpg"
            alt=""
            fill
            className="object-contain"
          />
        </div>

        <p className="max-w-3xl text-2xl font-bold text-tertiary">
          “I love the kids we serve and when love
          is the motivation, there is no thing
          that can't be achieved.”
        </p>

        <p className="text-base text-tertiary">
          Isabelle McKenzie / CEO & President
        </p>
      </div>
    </section>
  );
}
