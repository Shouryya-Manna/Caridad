import Image from "next/image";

export default function Mission() {
  return (
    <section className="bg-primary px-7">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-8">
        <div className="max-w-xl">
          {/* "Floating" looking text */}
          <p className="text-xl font-medium uppercase">
            Our Mission Is Simple
          </p>

          <div className="text-[120px] font-extrabold leading-[0.9] text-[#1D1C1C] mt-8">
            <span className="block tracking-normal">
              Stop
            </span>
            <span className="block">deaths</span>
            <span className="block">from</span>
            <span className="block">breast</span>
            <span className="block">cancer</span>
          </div>

          <button className="my-8 font-bold text-[#1D1C1C] text-[16px] cursor-pointer underline underline-offset-9 decoration-yellow-200">
            Learn more
          </button>
        </div>

        {/* Image div */}
        <div className="relative h-[900px] w-[900px]">
          <Image
            src="/Woman1.png"
            alt=""
            fill
            className="object-cover object-bottom mt-50"
          />
        </div>
      </div>
    </section>
  );
}
