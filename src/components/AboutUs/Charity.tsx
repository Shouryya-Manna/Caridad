import Image from "next/image";

export default function Charity() {
  return (
    <section className="max-w-8xl mx-auto w-full grid grid-cols-3 px-7.5 py-25">
      <div className="relative h-[330px] w-[280px]">
        <Image
          src="/About-Us/Ab1.jpg"
          alt=""
          fill
          className="object-contain object-center"
        />
      </div>
      <div className="relative h-[330px] w-[280px] mt-30">
        <Image
          src="/About-Us/Ab2.webp"
          alt=""
          fill
          className="object-contain object-center"
        />
      </div>

      <div className="flex flex-col justify-center py-50 leading-[1.1] max-w-sm">
        <h2 className="text-[50px] text-tertiary font-bold pb-5">
          What is Charity all about
        </h2>
        <p className="text-tertiary text-base leading-[1.8] my-5">
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
