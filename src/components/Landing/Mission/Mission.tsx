import Image from "next/image";

export default function Mission() {
  return (
    <section className="bg-primary">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-10 ">
        <div className="max-w-2xl">
          {/* "Floating" looking text */}
          <p className="mb-4 text-sm font-semibold tracking-widest">
            OUR MISSION IS SIMPLE
          </p>

          <div className="text-9xl font-extrabold text-black leading-[0.8]">
            <span className="block">Stop</span>
            <span className="block">deaths</span>
            <span className="block">from</span>
            <span className="block">breast</span>
            <span className="block">cancer</span>
          </div>

          <button className="my-4 text-lg font-bold text-black cursor-pointer">
            Learn more
          </button>
        </div>

        {/* Image div */}
        <div className="relative h-[900px] w-[900px]">
          <Image
            src="/Woman1.png"
            alt=""
            fill
            className="object-cover mt-60"
          />
        </div>
      </div>
    </section>
  );
}
