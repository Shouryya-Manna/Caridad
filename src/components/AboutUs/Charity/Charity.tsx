import Image from "next/image";
import React from "react";

export default function Charity() {
  return (
    <section className="max-w-8xl mx-auto w-full grid grid-cols-3 px-7.5">
      <div className="relative h-[500px] w-[200px] pb-50 items-start flex">
        <Image
          src="/About-Us/Ab1.jpg"
          alt=""
          fill
          className="object-contain object-top-left"
        />
      </div>
      <div className="relative h-[500px] w-[200px] pb-50 items-start flex">
        <Image
          src="/About-Us/Ab2.webp"
          alt=""
          fill
          className="object-contain object-center"
        />
      </div>
      <div>
        <h2 className="text-[50px] text-tertiary">
          What is Charity all about
        </h2>
        <p className="text-tertiary">
          A better life for young women can mean
          many things. A girl who completes her
          schooling grows into a woman who is
          better able to look after her health and
          that of her children. By
          <span className="font-semibold">
            finishing schooling herself,
          </span>
          she will care more that her children
          finish theirs and be better able to
          support them while they are in school
        </p>
      </div>
    </section>
  );
}
