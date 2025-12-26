import Image from "next/image";

export default function Section04() {
  return (
    <section className="max-w-8xl w-full px-7.5 mb-40">
      <div className="flex gap-10">
        <div className="relative max-w-180 w-full max-h-400 h-full">
          <Image
            src="/What-We-Do/Wwd04.webp"
            alt=""
            fill
            className="object-cover"
          />
          <div>
            <p>
              The students supported by our
              programs face major barriers to
              accessing education; many are
              orphaned, living in extreme poverty
              or dealing with other difficult
              family circumstances.
            </p>
            <button className="mt-8 font-bold text-tertiary text-[16px] cursor-pointer underline underline-offset-9 text-left decoration-yellow-200">
              View all children
            </button>
          </div>
        </div>
        <div className="lg:basis-[45%]">
          <h2 className="mb-5 text-tertiary text-xl font-medium">
            03
          </h2>
          <p className="lg:text-5xl md:text-3xl text-[28px] text-tertiary font-bold max-w-xl leading-[1.2]">
            Empower young people
          </p>
        </div>
      </div>
    </section>
  );
}
